import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useTokens';

const SignUp = () => {
    let navigate = useNavigate();
    // Create New User 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    // Handle Form
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = async data => {
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: data.name })
        reset()
    };
    // Continue with google 
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    // Use Token
    const [token] = useToken(user || gUser);
    // Loading 
    if (gLoading || loading || updating) {
        return <Loading />
    }
    if (token) {
        navigate("/");
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <h2 className="text-center text-2xl font-bold">Sign UP</h2>
                <div className="card-body">
                    <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
                        {/* Name  */}
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id='name' className="input input-bordered w-full max-w-lg" {...register("name")} />
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
                    <p>Already have an account? <Link className='text-primary' to="/login">Login</Link></p>
                    <div className="divider">Or</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline uppercase">Continue with Google</button>
                </div >
            </div >
        </div >
    );
};

export default SignUp;