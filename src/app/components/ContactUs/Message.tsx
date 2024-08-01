/* eslint-disable react/no-unescaped-entities */
"use client"

import { useInView } from 'react-intersection-observer';
import map from "../../../../public/contactus/map.png";
import Image from 'next/image';

import loc from "../../../../public/contactus/loc.png";
import pon from "../../../../public/contactus/pon.png";
import mail from "../../../../public/contactus/mail.png";
import pin from "../../../../public/contactus/pin.png";

export default function Message() {
    const [textRef, textInView] = useInView({
        triggerOnce: true,
        rootMargin: '-150px 0px', // Adjust the root margin as needed
    });
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-350px 0px', // Adjust the root margin as needed
    });
    const [ref2, secinView] = useInView({
        triggerOnce: true,
        rootMargin: '-350px 0px', // Adjust the root margin as needed
    });

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="bg-white w-full flex flex-col justify-center items-center pb-[150px] pt-[230px]" ref={textRef}>
                <h1 className={`text-center max-w-7xl text-[#033C5A] font-bold md:text-5xl sm:text-4xl lg:text-6xl text-4xl md:leading-[80px] lg:leading-[100px] max-md:mb-[20px] px-8 transition-all duration-[1500ms] leading-[60px] opacity-0 ${textInView ? 'opacity-100' : ''}`}>Contact  Us</h1>
                <h1 className={`text-center max-w-7xl text-[#033C5A] font-semibold text-xl px-8 transition-all duration-[1500ms] leading-[60px] opacity-0 ${textInView ? 'opacity-100' : ''}`}>We would like to get to know you, and we'd be happy to answer your questions!</h1>
            </div>
            <div className="w-full bg-cover h-full" style={{ backgroundImage: `url(/contactus/road.png)` }}>
                <div className='flex justify-end mr-[16%] px-10 max-lg:justify-center max-lg:mr-[0]'>
                    <div className={`bg-white rounded-2xl w-[600px] max-md:w-[400px] max-sm:w-[300px] h-[690px] flex flex-col justify-between items-center py-10 transition-opacity duration-[1500ms] drop-shadow-2xl my-[150px] ${inView ? 'opacity-100' : 'opacity-0'}`} ref={ref}>
                        <h2 className="text-[40px] max-md:text-[32px] tracking-tight font-extrabold text-center text-gray-900 max-w-[500px] px-6">Get in touch with Panca Budi Logistindo</h2>
                        <form action="#" className="space-y-2">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                                <input type="email" id="email" className="block p-2 w-[500px] max-md:w-[320px] max-sm:w-[250px] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500" placeholder="name@email.com" required></input>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Company</label>
                                <input type="text" id="subject" className="block p-2 w-[500px] max-md:w-[300px] max-sm:w-[250px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Company Name" required></input>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                                <input type="text" id="subject" className="block p-2 w-[500px] max-md:w-[300px] max-sm:w-[250px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required></input>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your Message</label>
                                <textarea id="message" rows={6} className="block p-2 w-[500px] max-md:w-[300px] max-sm:w-[250px] text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" className="w-[500px] max-md:w-[300px] max-sm:w-[250px] bg-red-600 hover:bg-red-900 text-white py-3 px-5 rounded-lg">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='bg-white flex justify-center w-full min-h-[1020px] pb-[200px] pt-[200px] max-lg:pb-[150px] max-lg:pt-[150px]' ref={ref2}>
                <div className={`flex justify-center flex-wrap gap-x-[70px] duration-[1500ms] ${secinView ? 'opacity-100' : 'opacity-0'}`}>
                <div className='flex flex-col px-8 mb-[50px] max-w-[600px]'>
                    <h1 className='text-[35px] text-[#2E364D] font-bold mb-[30px]'>OUR LOCATION</h1>
                    <iframe src="https://storage.googleapis.com/maps-solutions-ud4xv5z4g0/locator-plus/nkr4/locator-plus.html" className='mb-[30px] w-[550px] h-[460px] max-md:w-[400px] max-md:h-[350px] max-[480px]:w-[325px] max-[380px]:w-[295px] border-0 rounded-2xl'>
                    </iframe>
                    <p className='text-[#033C5A] font-medium text-[18px]'>Engage Us from our extensive network of offices across Indonesia for convenient contact and assistance</p>
                </div>
                <div className='flex flex-col max-w-[600px] gap-y-[50px] px-8'>
                    <div className='flex flex-col gap-y-[30px]'>
                        <h1 className='text-[35px] text-[#2E364D] font-bold'>HEAD OFFICE</h1>
                        <div className='flex text-[#033C5A] font-medium text-[18px] items-center gap-x-[20px]'>
                            <Image src={loc} alt={''} className='w-[50px] h-[50px]'></Image>
                            <p>Jl. KH. Agus Salim No 15 RT 002 / 05 Kel Poris Plawad, Kec Cipondoh Tangerang 15141, Indonesia</p>
                        </div>
                        <div className='flex text-[#033C5A] font-medium text-[18px] items-center gap-x-[20px]'>
                            <Image src={pon} alt={''} className='w-[50px] h-[50px]'></Image>
                            <p>(021) 552 4626, (021) 5573 0590, (021) 5573 0591</p>
                        </div>
                        <div className='flex text-[#033C5A] font-medium text-[18px] items-center gap-x-[20px]'>
                            <Image src={mail} alt={''} className='w-[50px] h-[50px]'></Image>
                            <p>info@pbl.co.id</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-[30px]'>
                        <h1 className='text-[35px] text-[#2E364D] font-bold'>BRANCH</h1>
                        <div className='flex text-[#033C5A] font-medium text-[18px] items-center gap-x-[20px]'>
                            <Image src={pin} alt={''} className='w-[12px] h-[12px]'></Image>
                            <p>Tangerang</p>
                        </div>
                        <div className='flex text-[#033C5A] font-medium text-[18px] items-center gap-x-[20px]'>
                            <Image src={pin} alt={''} className='w-[12px] h-[12px]'></Image>
                            <p>West Java</p>
                        </div>
                        <div className='flex text-[#033C5A] font-medium text-[18px] items-center gap-x-[20px]'>
                            <Image src={pin} alt={''} className='w-[12px] h-[12px]'></Image>
                            <p>Central Java</p>
                        </div>
                        <div className='flex text-[#033C5A] font-medium text-[18px] items-center gap-x-[20px]'>
                            <Image src={pin} alt={''} className='w-[12px] h-[12px]'></Image>
                            <p>East Java</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
