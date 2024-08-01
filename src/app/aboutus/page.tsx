"use client"

import Navbar from "@/app/components/NavbarPages"
import Header from "@/app/components/AboutUs/Header"
import Fill from "@/app/components/AboutUs/Fill"
import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    localStorage.setItem('lang', 'en');
  }, []);
    return(
    <>
    <title>PBL - About Us</title>
      <Navbar></Navbar>
      <Header></Header>
      <Fill></Fill>
    </>
    )
}