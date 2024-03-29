import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useTokens';

const Login = () => {
    // Login with email and password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    // Navigate to home 
    let navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [token] = useToken(user || gUser)
    // Token 
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])
    // Handle Form 
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        reset();
    };
    // Continue with google 
    if (gLoading || loading) {
        return <Loading />
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <h2 className="text-center text-2xl font-bold">Login</h2>
                <div className="card-body">
                    <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
                        {/* Email  */}
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' className="input input-bordered w-full max-w-lg" {...register("email")} />
                        {/* Password  */}
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' className="input input-bordered w-full max-w-lg" {...register("password")} />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        {error || gError ? <p className='text-red-400'>{error.message}</p> : ""}
                        <input className="btn btn-accent" type="submit" />
                    </form>
                    <p>New to Doctors Portal? <Link className='text-primary' to="/signup">Create New Account</Link></p>
                    <div className="divider">Or</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline uppercase">Continue with Google</button>
                </div>
            </div >
        </div >
    );
};

export default Login;