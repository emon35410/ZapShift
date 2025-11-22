import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import GoogleLogin from '../SocialLogin/GoogleLogin';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUser } = useAuth();

    const handleLogin = (data) => {
        signInUser(data.email, data.password)
            .then(result => {
                console.log("Login Successful:", result.user);
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    return (
        <div>
            <h1 className='text-5xl font-bold'>Welcome Back</h1>
            <p className='my-2'>Login with ZapShift</p>
            <form onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        className="input"
                        placeholder="Email"
                    />
                    {errors.email?.type === 'required' && (
                        <p className="text-red-500 font-bold">Email is required</p>
                    )}

                    <label className="label">Password</label>
                    <input
                        type="password"
                        {...register("password", { required: true })}
                        className="input"
                        placeholder="Password"
                    />
                    {errors.password?.type === 'required' && (
                        <p className="text-red-500 font-bold">Password is required</p>
                    )}
                    <p className="text-sm  ">
                        <Link to="/forgot-password" className="text-[#71717A] hover:underline">
                            Forgot Password?
                        </Link>
                    </p>



                    <button className="btn bg-primary hover:cursor-pointer hover:bg-black hover:text-white w-70 mt-4">
                        Login
                    </button>

                    <div className="mt-3">
                        <p className="text-sm">
                            Don't have an account?{" "}
                            <Link to="/register" className="link link-hover text-[#8FA748]">
                                Register
                            </Link>
                        </p>
                    </div>
                </fieldset>
            </form>

            <p className="text-secondary ml-30">or</p>

           <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Login;
