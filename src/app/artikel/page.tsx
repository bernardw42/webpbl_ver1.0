"use client"

import Navbar from "@/app/components/NavbarPages"
import Header from "@/app/components/Artikel/Head"
import { useEffect } from "react";

export default function Artikel(){
    useEffect(() => {
        localStorage.setItem('lang', 'id');
      }, []);
    return(
        <>
        <title>PBL - Artikel</title>
        <Navbar></Navbar>
        <Header></Header>
        </>
    )
}