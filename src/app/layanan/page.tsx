"use client"

import Head from "next/head"
import Navbar from "../components/NavbarPages"
import Header from "../components/Layanan/Header"
import { useEffect } from "react";

export default function Layanan() {
  useEffect(() => {
    localStorage.setItem('lang', 'id');
  }, []);
    return(
    <main>
      <title>PBL - Layanan</title>
      <Navbar></Navbar>
      <Header></Header>
    </main>
    )
}