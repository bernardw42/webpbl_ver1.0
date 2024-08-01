"use client"

import React from "react";
import Marquee from "react-fast-marquee";

import Image from "next/image"
import img1 from "../../../../public/home/partner/spons (1).png"
import img2 from "../../../../public/home/partner/spons (2).png"
import img3 from "../../../../public/home/partner/spons (3).png"
import img4 from "../../../../public/home/partner/spons (4).png"
import img5 from "../../../../public/home/partner/spons (5).png"
import img6 from "../../../../public/home/partner/spons (6).png"
import img7 from "../../../../public/home/partner/spons (7).png"
import img8 from "../../../../public/home/partner/spons (8).png"
import img9 from "../../../../public/home/partner/spons (9).png"
import img10 from "../../../../public/home/partner/spons (10).png"
import img11 from "../../../../public/home/partner/spons (11).png"
import img12 from "../../../../public/home/partner/spons (12).png"
import img13 from "../../../../public/home/partner/spons (13).png"
import img14 from "../../../../public/home/partner/spons (14).png"
import img15 from "../../../../public/home/partner/spons (15).png"
import img16 from "../../../../public/home/partner/spons (16).png"
import img17 from "../../../../public/home/partner/spons (17).png"
import img18 from "../../../../public/home/partner/spons (18).png"
import img19 from "../../../../public/home/partner/spons (19).png"
import img20 from "../../../../public/home/partner/spons (20).png"
import img21 from "../../../../public/home/partner/spons (21).png"
import img22 from "../../../../public/home/partner/spons (22).png"
import img23 from "../../../../public/home/partner/spons (23).png"
import img24 from "../../../../public/home/partner/spons (24).png"
import img25 from "../../../../public/home/partner/spons (25).png"
import img26 from "../../../../public/home/partner/spons (26).png"
import img27 from "../../../../public/home/partner/spons (27).png"


export default function Credits() {
    // Array containing all image paths
    const images = [
        img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27
    ];

    return (
        <div className="bg-white w-full flex flex-col items-center justify-center pt-[150px] pb-[200px]">
            <h1 className="text-[#FF2626] font-semibold text-[40px] max-md:text-[35px] mb-[70px]">OUR CLIENTS</h1>
            <Marquee pauseOnHover>
                {images.map((img, index) => (
                    <Image key={index} src={img} alt={`img${index}`} className="w-[280px] max-md:w-[250px] max-md:mx-[-40px]" />
                ))}
            </Marquee>
            <div className="md:hidden pt-[50px]">
                <Marquee pauseOnHover direction="right">
                    {images.map((img, index) => (
                        <Image key={index} src={img} alt={`img${index}`} className="w-[280px] max-md:w-[250px] max-md:mx-[-40px]" />
                    ))}
                </Marquee>
            </div>
        </div>
    );
}