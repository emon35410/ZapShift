import axios from 'axios';
import React from 'react';

const useAxiousSecure = () => {

    const AxiousSecure = axios.create({
        baseURL: 'http://localhost:3000'
    });

    return AxiousSecure;
};

export default useAxiousSecure;