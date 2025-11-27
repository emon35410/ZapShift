import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Loading from '../../Component/Loading/Loading';
import Swal from 'sweetalert2';
import useAxiousSecure from '../../Hooks/useAxiousSecure';
import useAuth from '../../Hooks/useAuth';

const SendParcel = () => {
    const { register, handleSubmit, control } = useForm();
    const {user} = useAuth();
    const serviceCenter = useLoaderData();
    const axiosSecure = useAxiousSecure();

    const senderRegion = useWatch({ control, name: 'SenderPickupRegion' });
    const receiverRegion = useWatch({ control, name: 'ReceiverRegion' });

    const [senderDistrict, setSenderDistrict] = useState('');
    const [receiverDistrict, setReceiverDistrict] = useState('');

    if (!serviceCenter) return <Loading />;

    const regions = [...new Set(serviceCenter.map(c => c.region))];

    const getDistricts = (region) => {
        const filtered = serviceCenter.filter(c => c.region === region);
        return [...new Set(filtered.map(d => d.district))];
    };

    const handleSendParcel = (data) => {
        const isDocument = data.parcelType === 'document';
        const weight = parseFloat(data.ParcelWeight || 0);

        const isSameDistrict = senderDistrict === receiverDistrict;

        let cost = 0;

        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;
        } else {
            if (weight <= 3) {
                cost = isSameDistrict ? 110 : 150;
            } else {
                const extraKg = weight - 3;
                cost = isSameDistrict
                    ? 110 + extraKg * 40
                    : 150 + extraKg * 40 + 40;
            }
        }

        console.log("Final Cost:", cost);
        Swal.fire({
            title: "Are you agree with the cost?",
            text: `You have to pay ${cost} taka!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmed!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.post('/parcels',data)
                .then(res=>{
                    console.log("after saving parcel", res.data)
                })
                
                // Swal.fire({
                //     title: "Booking Confirmed!",
                //     text: "Your parcel has been successfully booked.",
                //     icon: "success"

                // });
            }
        });
    };

    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div data-aos="zoom-out" className="min-h-screen p-8">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-8">

                <h1 className="text-4xl font-bold text-gray-900 mb-8">Send Parcel</h1>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter your parcel details</h2>

                <form onSubmit={handleSubmit(handleSendParcel)}>

                    {/* Parcel Details */}
                    <div className="border-b pb-6 mb-6">
                        <div className="flex gap-6 mb-6">
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" defaultChecked value="document" {...register('parcelType')} className="w-5 h-5" />
                                <span className="ml-2">Document</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" value="not-document" {...register('parcelType')} className="w-5 h-5" />
                                <span className="ml-2">Non-Document</span>
                            </label>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-2">Parcel Name</label>
                                <input type="text" {...register('ParcelName', { required: true })} className="w-full px-4 py-2 border rounded-md" />
                            </div>

                            <div>
                                <label className="block mb-2">Parcel Weight (KG)</label>
                                <input type="number" {...register('ParcelWeight', { required: true })} className="w-full px-4 py-2 border rounded-md" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-12">

                        {/* Sender Column */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Sender Details</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block mb-2">Sender Name</label>
                                    <input type="text" {...register('SenderName')} defaultValue={user?.displayName} className="w-full px-4 py-2 border rounded-md" />
                                </div>

                                <div>
                                    <label className="block mb-2">Sender Region</label>
                                    <select {...register('SenderPickupRegion', { required: true })} className="w-full px-4 py-2 border rounded-md bg-white">
                                        <option>Select Region</option>
                                        {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
                                    </select>
                                </div>

                                <div>
                                    <label className="block mb-2">Sender District</label>
                                    <select
                                        value={senderDistrict}
                                        onChange={(e) => setSenderDistrict(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-md bg-white"
                                    >
                                        <option>Select District</option>
                                        {senderRegion && getDistricts(senderRegion).map((d, i) => <option key={i} value={d}>{d}</option>)}
                                    </select>
                                </div>

                                <div>
                                    <label className="block mb-2">Sender Address</label>
                                    <input type="text" {...register('SenderAddress', { required: true })} className="w-full px-4 py-2 border rounded-md" />
                                </div>

                                <div>
                                    <label className="block mb-2">Sender Email</label>
                                    <input type="text" {...register('SenderEmail', { required: true })} defaultValue={user?.email} className="w-full px-4 py-2 border rounded-md" />
                                </div>

                                <div>
                                    <label className="block mb-2">Pickup Instruction</label>
                                    <textarea {...register('PickupInstruction')} rows="4" className="w-full px-4 py-2 border rounded-md" />
                                </div>
                            </div>
                        </div>

                        {/* Receiver Column */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Receiver Details</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block mb-2">Receiver Name</label>
                                    <input type="text" {...register('ReceiverName')} className="w-full px-4 py-2 border rounded-md" />
                                </div>

                                <div>
                                    <label className="block mb-2">Receiver Region</label>
                                    <select {...register('ReceiverRegion', { required: true })} className="w-full px-4 py-2 border rounded-md bg-white">
                                        <option>Select Region</option>
                                        {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
                                    </select>
                                </div>

                                <div>
                                    <label className="block mb-2">Receiver District</label>
                                    <select
                                        value={receiverDistrict}
                                        onChange={(e) => setReceiverDistrict(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-md bg-white"
                                    >
                                        <option>Select District</option>
                                        {receiverRegion && getDistricts(receiverRegion).map((d, i) => <option key={i} value={d}>{d}</option>)}
                                    </select>
                                </div>

                                <div>
                                    <label className="block mb-2">Receiver Address</label>
                                    <input {...register('ReceiverAddress')} className="w-full px-4 py-2 border rounded-md" />
                                </div>

                                <div>
                                    <label className="block mb-2">Receiver Email</label>
                                    <input {...register('ReceiverEmail')} className="w-full px-4 py-2 border rounded-md" />
                                </div>

                                <div>
                                    <label className="block mb-2">Delivery Instruction</label>
                                    <textarea {...register('DeliveryInstruction')} rows="4" className="w-full px-4 py-2 border rounded-md" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <p className="text-sm text-gray-600 mb-4">* Pickup Time 4pm–7pm Approx.</p>
                        <button className="px-8 py-3 bg-primary hover:bg-black hover:text-white text-gray-900 font-medium rounded-md">
                            Proceed to Confirm Booking
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SendParcel;
