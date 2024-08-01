"use client"

import Header from "@/app/components/Home/Header"
import Service from "@/app/components/Home/Service";
import Map from "@/app/components/Home/Map";
import Message from "@/app/components/Home/Message";
import Credits from "@/app/components/Home/Credits";
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Set language to "en" in local storage when the index page loads
    localStorage.setItem('lang', 'en');
  }, []);
  return (
    <>
        <head>
          <title>Panca Budi Logistindo</title>
        </head>
        <Navbar></Navbar>
        <Header/>
        <Service/>
        <Map/>
        <Message/>
        <Credits />
    </>
  );
}
