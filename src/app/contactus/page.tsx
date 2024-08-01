"use client"

import { useEffect } from "react";
import Message from "../components/ContactUs/Message"
import Navbar from "../components/NavbarPages"

export default function ContactUs (){
    useEffect(() => {
        localStorage.setItem('lang', 'en');
      }, []);
    return(
        <>
        <title>PBL - Contact Us</title>
        <Navbar></Navbar>
        <Message></Message>
        </>
    )
}