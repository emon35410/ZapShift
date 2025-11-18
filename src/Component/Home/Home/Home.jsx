import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import Brand from '../Brand/Brand';
import LIveTraking from '../LiveTracking/LIveTraking';
import MarcentBanner from '../MarcentBanner/MarcentBanner';
import Reiews from '../Reviews/Reiews';
import { OrbitProgress } from 'react-loading-indicators';
import FAQ from '../FAQ/FAQ';


const Home = () => {
    const reviewPromise = fetch("/reviews.json").then(res=>res.json())
    return (
        <div className=''>
            
           <Banner></Banner>
           <HowItWorks></HowItWorks>
           <OurServices></OurServices>
           <Brand></Brand>
           <LIveTraking></LIveTraking>
           <MarcentBanner></MarcentBanner>
           <Suspense fallback={<div><OrbitProgress variant="dotted" color="#32cd32" size="medium" text="" textColor="" /></div>}>
            <Reiews reviewPromise={reviewPromise}></Reiews>
           </Suspense>
           <FAQ></FAQ>
        </div>
    );
};

export default Home;