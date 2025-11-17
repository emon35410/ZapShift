import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import Brand from '../Brand/Brand';

const Home = () => {
    return (
        <div>
            
           <Banner></Banner>
           <HowItWorks></HowItWorks>
           <OurServices></OurServices>
           <Brand></Brand>
        </div>
    );
};

export default Home;