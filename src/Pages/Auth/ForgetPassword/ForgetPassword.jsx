import React from 'react';
import { Link } from 'react-router';

const ForgetPassword = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold'>Forgot Password</h1>
            <p className='my-2'>Enter your email address and we’ll send you a <br /> reset link.</p>
            <form className="flex flex-col gap-2 w-69 ">
                <label className="label">Email</label>
                <input
                    type="email"
                    className="input border p-2 rounded"
                    placeholder="Email"
                />
                <button type='submit' className="btn bg-primary hover:cursor-pointer hover:bg-black hover:text-white w-70 mt-4">
                    Send
                </button>
            </form>
            <p className="text-sm text-[#71717A] mt-3">
                Remember Your Password?{" "}
                <Link to="/login"  className="link link-hover text-[#8FA748]">
                    Login
                </Link>
            </p>

        </div>
    );
};

export default ForgetPassword;