import React from 'react';
import logo from "../../assets/Image/logo.png"

const Logo = () => {
    return (
        <div className='mb-5 flex justify-self-start items-end'>
            <img src={logo} alt="" />
            <h3 className='text-3xl font-bold -ms-2.5'>ZapShift</h3>
        </div>
    );
};

export default Logo;