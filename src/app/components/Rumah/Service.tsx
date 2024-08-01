"use client"

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Transition } from 'react-transition-group';
import Card from './ServiceCard/Card';
import img from '../../../../public/home/tes (1).png';
import img2 from '../../../../public/home/tes (2).png';
import img3 from '../../../../public/home/tes (3).png';

export default function Service() {

  const CardData = [
    {
      title: "Pengurusan Bea Cukai & Layanan Dokumen",
      desc: "PBL bertanggung jawab untuk menangani prosedur bea cukai dan memastikan kesesuaian terhadap regulasi impor/ekspor.",
      image: img,
    },
    {
      title: "Layanan Truk",
      desc: "PBL menangani pergerakan barang dan material dari satu lokasi ke lokasi lainnya.",
      image: img2,
    },
    {
      title: "Ekspor & Impor",
      desc: "Layanan impor-ekspor dan pembersihan bea cukai dari PBL terintegrasi dengan sistem operasional kami secara global",
      image: img3,
    },
  ];

  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px', // Adjust the root margin as needed
  });

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    rootMargin: '-10px 0px', // Adjust the root margin as needed
  });

  return (
    <div className="bg-[#033C5A] w-full pt-[150px] pb-[200px] max-md:pt-[100px] max-md:pb-[150px] flex flex-col justify-center items-center" ref={textRef}>
      <div className="flex flex-col justify-center items-center text-[white]">
        <h1 className='text-[40px] max-md:text-[35px] max-w-7xl px-6 text-center font-semibold'>Layanan Kami</h1>
        <p className='text-[18px] max-md:text-[15px] max-w-7xl px-6 text-center mb-[70px] font-extralight'>Salamat datang di Panca Budi Logistindo! Solusi Logistik Terbaik untuk Anda!</p>
      </div>
      <div className="flex justify-center flex-wrap gap-y-[50px] items-center gap-x-[50px] text-center px-8" ref={cardRef}>
        {CardData.map((CardDetail, index) => (
          <Transition key={CardDetail.title} in={cardInView} timeout={500 * index}>
            {(state) => (
              <Card
                key={CardDetail.title}
                {...CardDetail}
                className={`${
                  state === 'entered' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-40px]'
                } transition-all delay-[100ms] duration-[2000ms] ease-in-out`}
              />
            )}
          </Transition>
        ))}
      </div>
    </div>
  );
}

