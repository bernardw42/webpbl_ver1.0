"use client"

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Transition } from 'react-transition-group';
import Card from './Card/Card';
import Image from 'next/image';
import truk from '../../../../public/services/truk.png';
import build from '../../../../public/services/build.png';
import b from "../../../../public/services/b.png"
import b2 from "../../../../public/services/b2.png"

const CardData = [
    {
      title: 'TRUCKING',
      desc: "PBL handle the movement of goods and materials from one location to another. This includes arranging for shipping, trucking, air freight, or rail transportation based on the specific needs of their clients.",
    },
    {
      title: 'EXPORT & IMPORT',
      desc: "PBL is responsible for handling customs procedures and ensure compliance with import/export regulations. We assist in clearing customs, completing necessary paperwork, and paying duties or taxes on behalf of our clients.",
    },
    {
      title: 'DISTRIBUTION & WAREHOUSING',
      desc: "PBL provide warehousing facilities to store goods temporarily. They manage inventory levels, organize storage space efficiently, and ensure timely delivery of goods when required as well as its delivery.",
    },
  ];

export default function Header() {
    const [titleRef, titleInView] = useInView({
        triggerOnce: true,
        rootMargin: '-150px 0px', // Adjust the root margin as needed
    });

    const [cardRef, cardInView] = useInView({
        triggerOnce: true,
        rootMargin: '-200px 0px', // Adjust the root margin as needed
      });

    const [showTitle, setShowTitle] = useState(false);

    // When the section comes into view, set corresponding show variables to true
    useEffect(() => {
        if (titleInView) {
            setShowTitle(true);
        }
    }, [titleInView]);

    return (
        <div className="flex flex-col justify-center items-center relative">
            <div className="bg-[#033C5A] w-full flex justify-center items-center pb-[150px] pt-[230px]" ref={titleRef}>
                <div className='max-w-7xl flex max-[1024px]:flex-col justify-center items-center relative px-8 gap-y-[50px]'>
                    <h1 className={`text-center pr-[500px] max-[1024px]:pr-[0px] text-white font-bold text-[35px] max-md:text-2xl max-md:leading-[50px] transition-all duration-[1500ms] leading-[70px] opacity-0 ${showTitle ? 'opacity-100' : ''}`}>
                        Enjoy our <span className="text-[#FF2626] ">features and services</span> that can contribute to your business growth.
                    </h1>
                    <Image src={truk} alt='truk' className={`w-[400px] h-auto absolute left-[61%] top-[50%] transform -translate-y-1/2 max-[1024px]:hidden transition-opacity duration-1000 ${showTitle ? 'opacity-100' : 'opacity-0'}`} />
                    <Image src={truk} alt='build' className={`w-[400px] h-auto flex justify-center transition-opacity min-[1025px]:hidden duration-1000 ${showTitle ? 'opacity-100' : 'opacity-0'}`} />
                </div>
            </div>
            <div className='bg-white w-full flex justify-center items-center flex-col pb-[200px] pt-[150px] max-lg:pb-[150px] max-lg:pt-[100px] relative z-10'>
                <h1 className='text-[#FF2626] text-[35px] font-bold text-center px-6'>BUSINESS OVERVIEW</h1>
                <div className='max-w-7xl relative'>
                    <Image src={b} alt='b' className='w-screen h-[500px] object-cover z-0 opacity-50'></Image>
                    <Image src={b2} alt='b' className='w-screen h-[450px] object-cover z-0 opacity-50'></Image>
                    <div className="absolute top-24 left-0 w-full h-full flex justify-center items-start">
                        <div className="flex justify-center flex-wrap gap-y-[70px] items-center gap-x-[70px] text-center mb-[200px] px-8 relative z-20" ref={cardRef}>
                            {CardData.map((CardDetail, index) => (
                                <Transition key={CardDetail.title} in={cardInView} timeout={500 * index}>
                                    {(state: string) => (
                                        <Card
                                            key={CardDetail.title}
                                            {...CardDetail}
                                            className={`${
                                                state === 'entered' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-70px]'
                                            } transition-all duration-[1000ms] ease-in-out`}
                                        ></Card>
                                    )}
                                </Transition>
                            ))}
                        </div>
                    </div>

                </div>
                <Image src={build} alt='build' className='w-screen h-[300px] object-cover z-10 max-[1133px]:mt-[300px] max-sm:mt-[400px]'></Image>
            </div>

        </div>
    );
}



