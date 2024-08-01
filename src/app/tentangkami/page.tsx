"use client"

import Navbar from "@/app/components/NavbarPages"
import Header from "@/app/components/TentangKami/Header"
import Fill from "@/app/components/TentangKami/Fill"
import { useEffect } from "react";

export default function TentangKami() {
  useEffect(() => {
    localStorage.setItem('lang', 'id');
  }, []);
    return(
    <>
      <title>PBL - Tentang Kami</title>
      <Navbar></Navbar>
      <Header></Header>
      <Fill></Fill>
    </>
    )
}