"use client"

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import truk from "../../../../public/aboutus/truk.png";
import garasi from "../../../../public/aboutus/garasi.png";

export default function Header() {
    const [titleRef, titleInView] = useInView({
        triggerOnce: true,
        rootMargin: '-150px 0px', // Adjust the root margin as needed
    });

    const [div1Ref, div1InView] = useInView({
        triggerOnce: true,
        rootMargin: '-300px 0px', // Adjust the root margin as needed
    });

    const [div2Ref, div2InView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px', // Adjust the root margin as needed
    });

    const [showTitle, setShowTitle] = useState(false);
    const [showDiv1, setShowDiv1] = useState(false);
    const [showDiv2, setShowDiv2] = useState(false);

    // When the section comes into view, set corresponding show variables to true
    useEffect(() => {
        if (titleInView) {
            setShowTitle(true);
        }
    }, [titleInView]);

    useEffect(() => {
        if (div1InView) {
            setShowDiv1(true);
        }
    }, [div1InView]);

    useEffect(() => {
        if (div2InView) {
            setShowDiv2(true);
        }
    }, [div2InView]);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="bg-[#033C5A] w-full flex justify-center items-center pb-[150px] pt-[230px]" ref={titleRef}>
                <h1 className={`text-center max-w-7xl text-white font-bold text-[35px] max-md:text-2xl max-md:leading-[50px] px-8 transition-all duration-[1500ms] leading-[70px] opacity-0 ${showTitle ? 'opacity-100' : ''}`}>We are committed to providing <span className="text-[#FF2626]">Easy, Fast, and Reliable</span> services to help business players grow and advance.</h1>
            </div>
            <div className='bg-white w-full flex justify-center items-center flex-col pb-[200px] pt-[200px] max-lg:pb-[150px] max-lg:pt-[150px] gap-y-[70px]'>
                <div className="flex flex-col min-[900px]:flex-row justify-center gap-y-[50px] gap-x-[70px] px-8 max-w-7xl items-center">
                    <Image
                        src={truk}
                        alt='truk'
                        className={`w-[500px] h-auto transition-opacity duration-1000 ${showDiv1 ? 'opacity-100' : 'opacity-0'}`}
                        ref={div1Ref}
                    />
                    <h1 className={`text-[20px] max-[900px]:text-center text-black transition-all duration-1000 ${showDiv1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100%]'}`}>
                        At PBL, we recognize the importance of technology as. With this in mind,we proudly introduce our Integrated System, comprising Pricing Management System (PMS), Warehouse Management System (WMS), and Trucking Management System (TMS). This comprehensive suite of tools embodies our commitment to achieving unparalleled levels of efficiency and effectiveness.
                    </h1>
                </div>
                <div className="flex flex-col min-[900px]:flex-row justify-center gap-y-[50px] gap-x-[70px] px-8 max-w-7xl items-center">
                    <Image 
                        src={garasi} 
                        alt='truk' 
                        className={`w-[500px] h-auto transition-opacity duration-1000 ${showDiv2 ? 'opacity-100' : 'opacity-0'} min-[900px]:order-2`} 
                        ref={div2Ref} />
                    <h1 className={`text-[20px] text-right max-[900px]:text-center text-black transition-all duration-1000 ${showDiv2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100%]'}  min-[900px]:order-1`}>
                        At PBL, we recognize the importance of technology as. With this in mind, we proudly introduce our Integrated System, comprising Pricing Management System (PMS), Warehouse Management System (WMS), and Trucking Management System (TMS). This comprehensive suite of tools embodies our commitment to achieving unparalleled levels of efficiency and effectiveness.
                    </h1>
                </div>
            </div>
        </div>
    );
}

