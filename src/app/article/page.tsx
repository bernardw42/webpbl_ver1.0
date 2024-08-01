"use client"

import Navbar from "@/app/components/NavbarPages"
import Header from "@/app/components/Article/Head"
import { useEffect } from "react";

export default function Article(){
    useEffect(() => {
        localStorage.setItem('lang', 'en');
      }, []);
    return(
        <>
        <title>PBL - Article</title>
        <Navbar></Navbar>
        <Header></Header>
        </>
    )
}