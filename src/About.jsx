import React from 'react';
import web1 from "../src/images/react3.png";
import Common from './Common';


const About = () =>{
    return (
        <>
           <Common name="Welcome to About Page" imgsrc={web1} visit='/contact' btnname="Contact Now" />
        </>
    );
};

export default About;