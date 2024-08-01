"use client"

import Header from "@/app/components/Rumah/Header"
import Service from "@/app/components/Rumah/Service";
import Map from "@/app/components/Rumah/Map";
import Message from "@/app/components/Rumah/Message";
import Credits from "@/app/components/Rumah/Credits";
import Navbar from "@/app/components/Navbar"
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    localStorage.setItem('lang', 'id');
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