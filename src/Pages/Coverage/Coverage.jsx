import React, { useEffect, useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import { useLoaderData } from 'react-router';
import { Search } from 'lucide-react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Coverage = () => {
     useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);
    const serviceCenters = useLoaderData();
    const mapRef = useRef(null)
    console.log(serviceCenters);
    const position = [24.899, 91.872]
    const handleSumit = (e) => {
        e.preventDefault();
        const location = e.target.location.value;
        const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()))
        if(district){
            const coordinate = [district.latitude,district.longitude]
            console.log(district, coordinate)
            mapRef.current.flyTo(coordinate,15);
        }
    }
    return (
        <div data-aos="zoom-in" className='bg-white shadow my-10 py-10 rounded-2xl'>
            <div className='w-11/12 mx-auto '>
                <div>
                    <h1 className='text-5xl font-bold text-accent'>We are available in 64 districts</h1>
                    <div className="w-full max-w-2xl my-5">
                       
                        <div className="relative">
                            <div className="relative">
                                <form onSubmit={handleSumit}>
                                    <input
                                        type="text"
                                        name='location'
                                        placeholder="Search..."
                                        className="w-full px-6 py-4 pl-14 text-lg rounded-full border-2 border-gray-200 focus:border-indigo-500 focus:outline-none shadow-lg transition-all duration-200"
                                    />
                                </form>
                                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>
                     
                        </div>
                    </div>
                </div>
                <div className='my-10'>
                     <h1 className='my-10 text-accent text-4xl font-bold'>We deliver almost all over Bangladesh</h1>
                    <div className=' w-full h-[600px]'>
                        <MapContainer className='h-[600px] ' ref={mapRef} center={position} zoom={7} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {
                                serviceCenters.map((service,index) => <Marker key={index+20} position={[service.latitude, service.longitude]}>
                                    <Popup>
                                        {
                                            <strong>{service.district}</strong>

                                        } <br /> {service.covered_area.join(", ")}
                                    </Popup>
                                </Marker>)
                            }
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coverage;