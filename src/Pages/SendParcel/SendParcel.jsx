import React, { useEffect } from 'react';
 import 'aos/dist/aos.css';
import Aos from 'aos';
import { useForm } from 'react-hook-form';


const SendParcel = () => {
    const {register,handleSubmit, formState:{errors}} = useForm();
    const handleSendParcel =(data)=>{
        console.log(data)
    }
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
        }, []);
    return (
        <div data-aos="zoom-out" className="min-h-screen p-8">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-8">

                {/* Page Title */}
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Send Parcel</h1>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter your parcel details</h2>

                <form onSubmit={handleSubmit(handleSendParcel)}>
                    {/* Parcel Details Section */}
                    <div className="border-b border-gray-200 pb-6 mb-6">


                        {/* Parcel Type Radio */}
                        <div className="flex gap-6 mb-6">
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" className="w-5 h-5 text-green-500" />
                                <span className="ml-2 text-gray-900 font-medium">Document</span>
                            </label>

                            <label className="flex items-center cursor-pointer">
                                <input type="radio" className="w-5 h-5 text-gray-300" />
                                <span className="ml-2 text-gray-900 font-medium">Not-Document</span>
                            </label>
                        </div>

                        {/* Parcel Name & Weight */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">
                                    Parcel Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Parcel Name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">
                                    Parcel Weight (KG)
                                </label>
                                <input
                                    type="text"
                                    placeholder="Parcel Weight (KG)"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sender & Receiver Two Column Layout */}
                    <div className="grid grid-cols-2 gap-12">

                        {/* Sender Column */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sender Details</h3>

                            <div className="space-y-4">

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Sender Name</label>
                                    <input type="text" placeholder="Sender Name" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Sender Pickup Warehouse</label>
                                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white">
                                        <option>Select Warehouse</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Address</label>
                                    <input type="text" placeholder="Address" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Sender Contact No</label>
                                    <input type="text" placeholder="Sender Contact No" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Your Region</label>
                                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white">
                                        <option>Select Region</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Pickup Instruction</label>
                                    <textarea rows="4" placeholder="Pickup Instruction" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                                </div>

                            </div>
                        </div>

                        {/* Receiver Column */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Receiver Details</h3>

                            <div className="space-y-4">

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Receiver Name</label>
                                    <input type="text" placeholder="Receiver Name" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Receiver Delivery Warehouse</label>
                                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white">
                                        <option>Select Warehouse</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Address</label>
                                    <input type="text" placeholder="Address" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Receiver Contact No</label>
                                    <input type="text" placeholder="Receiver Contact No" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Receiver Region</label>
                                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white">
                                        <option>Select Region</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Delivery Instruction</label>
                                    <textarea rows="4" placeholder="Delivery Instruction" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* Submit Section */}
                    <div className="mt-8">
                        <p className="text-sm text-gray-600 mb-4">* Pickup Time 4pm–7pm Approx.</p>

                        <button className="px-8 py-3 bg-primary hover:cursor-pointer hover:bg-black hover:text-white text-gray-900 font-medium rounded-md transition-colors">
                            Proceed to Confirm Booking
                        </button>
                    </div>
                </form>

            </div>
        </div>

    );
};

export default SendParcel;