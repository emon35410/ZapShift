import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiousSecure from '../../../Hooks/useAxiousSecure';
import { OrbitProgress } from 'react-loading-indicators';

const MyParcels = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiousSecure();
    const { data: parcels = [], isLoading } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`parcels?email=${user.email}`)
            return res.data;
        }

    })
    if (isLoading) {
        return <div className='flex justify-center items-center'><OrbitProgress variant="spokes" color="#32cd32" size="medium" text="" textColor="" /></div>;
    }
    return (
        <div>
            <h1>My parcels here {parcels.length}</h1>
        </div>
    );
};

export default MyParcels;