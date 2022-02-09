import React from 'react';
import web from "../src/images/react2.jpg";
import Common from './Common';


const Home = () =>{
    return (
        <>
            <Common name="Grow your business with" imgsrc={web} visit='/services' btnname="Get Started" />

        </>
    );
};

export default Home;