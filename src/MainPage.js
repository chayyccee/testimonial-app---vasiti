import React from 'react';

import SubBar from './components/SubBar';
import AppNav from './components/AppNav';
import Banner from './components/Banner';
import CustomerFocus from './components/CustomerFocus';
import GetTestimonies from './components/GetTestimonies';
import RecentTestimonies from './components/RecentTestimonies';
import CustomerFocus2 from './components/CustomerFocus2';
import Footer from './components/Footer';

const MainPage = () => {
   
return (
    <div>
        <SubBar />
        <AppNav />
        <Banner />
        <CustomerFocus />
        <GetTestimonies />
        <CustomerFocus2 />
        <RecentTestimonies />
        <Footer />
    </div>

);
};

export default MainPage;
