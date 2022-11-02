import React from 'react';
import About from '../About/About';
import Bannar from '../Bannar/Bannar';
import Products from '../Products/Products';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Services></Services>
            <Products></Products>
        </div>
    );
};

export default Home;