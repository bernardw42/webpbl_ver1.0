"use client"

import Navbar from "@/app/components/NavbarPages"
import Header from "@/app/components/Services/Header"
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    localStorage.setItem('lang', 'en');
  }, []);
    return(
    <>
      <title>PBL - Services</title>
      <Navbar></Navbar>
      <Header></Header>
    </>
    )
}