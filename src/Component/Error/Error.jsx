import React from 'react';
import errorImg from "../../assets/Image/Error.png";
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/"); 
    };

    return (
        <div className='bg-white my-10 py-10 shadow rounded-2xl'>
            <div className='flex justify-center items-center flex-col'>
                <img className='w-[300px] h-[350px]' src={errorImg} alt="Error" />
                <button 
                    onClick={handleGoHome} 
                    className='btn bg-[#CAEB66] mt-4'
                >
                    Go Home
                </button>
            </div>
        </div>
    );
};

export default Error;
