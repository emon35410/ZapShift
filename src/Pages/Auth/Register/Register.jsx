import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import GoogleLogin from '../SocialLogin/GoogleLogin';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const {registerUser} = useAuth();

    const password = watch("password");


    const hanldleRegister = (data) => {
        console.log("after registration", data)
        registerUser(data.email,data.password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div>
            <h1 className='text-5xl font-bold'>Create Account</h1>
            <p className='my-2'>Register with ZapShift</p>
            <form onSubmit={handleSubmit(hanldleRegister)}>
                <fieldset className="fieldset">
                    <label className="label">Full Name</label>
                    <input type="text" {...register("name", { required: true })} className="input" placeholder="Full Name" />
                    {errors.name?.type === 'required' && <p className='text-red-500 font-bold'>Name is required</p>}

                    <label className="label">Email</label>
                    <input type="email" {...register("email", { required: true })} className="input" placeholder="Email" />
                    {errors.email?.type === 'required' && <p className='text-red-500 font-bold'>Email is required</p>}

                    <label className="label">Password</label>
                    <input type="password" {...register("password", { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ })} className="input" placeholder="Password" />
                    {errors.password?.type === 'required' && <p className='text-red-500 font-bold'>Password is required</p>}
                    {errors.password?.type === 'minLength' && <p className='text-red-500 font-bold'>Password must be in 6 characters</p>}
                    {errors.password?.type === 'pattern' && <p className='text-red-500 font-bold'>Password must include uppercase, lowercase, number, and special character</p>}

                    <label className="label">Confirm Password</label>
                    <input type="password" {...register("confirmpassword", { required: true, validate: (value) => value === watch("password") || "Password Not Match" })} className="input" placeholder="Confirm Password" />
                    {errors.confirmpassword?.type === "required" && (
                        <p className="text-red-500 font-bold">Confirm Password is required</p>
                    )}

                    {errors.confirmpassword?.type === "validate" && (
                        <p className="text-red-500 font-bold">Passwords do not match</p>
                    )}
                    <button className="btn bg-primary hover:cursor-pointer hover:bg-black hover:text-white w-70 mt-4">Register</button>
                    <div className="mt-3">
                        <p className="text-sm">
                            Already have an account?{" "}
                            <Link to="/login" className="link link-hover text-[#8FA748]">Login</Link>
                        </p>
                    </div>
                </fieldset>
            </form>
            <p className='text-secondary ml-30 '>or</p>
            <GoogleLogin></GoogleLogin>
        </div>

    );
};

export default Register;