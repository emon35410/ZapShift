import React from 'react';
import Logo from '../Component/Logo/Logo';
import { Outlet } from 'react-router';
import authImg from "../assets/Image/authImage.png"

const Authlayout = () => {
    return (
        <div className="w-full h-screen flex flex-col md:flex-row">
            
            <div className="flex-1 ml-20 my-3 md:overflow-auto">
                <Logo />
                <div className="md:ml-15">
                    <Outlet />
                </div>
            </div>

            <div className="flex-1 bg-[#FAFDF0]">
                <img 
                    src={authImg} 
                    alt="" 
                    className="w-full h-full object-cover" 
                />
            </div>

        </div>
    );
};

export default Authlayout;
