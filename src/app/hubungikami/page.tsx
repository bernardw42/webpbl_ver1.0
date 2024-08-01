"use client"

import { useEffect } from "react";
import Message from "../components/hubungikami/Message"
import Navbar from "../components/NavbarPages"

export default function HubunguKami(){
    useEffect(() => {
        localStorage.setItem('lang', 'id');
      }, []);
    return(
        <>
        <title>PBL - Hubungi Kami</title>
        <Navbar></Navbar>
        <Message></Message>
        </>
    )
}