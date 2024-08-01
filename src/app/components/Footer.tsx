"use client"

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/navbar/logo1.png';
import sos from "../../../public/navbar/sos (1).png";
import sos1 from "../../../public/navbar/sos (2).png";
import sos2 from "../../../public/navbar/sos (3).png";

export default function Footer() {
    // State to hold lang value
    const [lang, setLang] = useState('en');

    // Watch for changes in pathname
    const pathname = usePathname();
    useEffect(() => {
        // Check if localStorage is available
        if (typeof window !== 'undefined') {
            // Update lang when pathname changes
            const storedLang = localStorage.getItem("lang");
            if (storedLang) {
                setLang(storedLang);
            }
        }
    }, [pathname]);

    // Define language-specific navbar text
    const navbarText = {
        en: {
            about: 'About Us',
            services: 'Services',
            article: 'Article',
            contact: 'Contact Us',
        },
        id: {
            about: 'Tentang Kami',
            services: 'Layanan',
            article: 'Artikel',
            contact: 'Hubungi Kami',
        },
    };

    // Mapping object for English routes to Indonesian routes
    const routeMapping: Record<string, string> = {
        aboutus: 'tentangkami',
        services: 'layanan',
        article: 'artikel',
        contactus: 'hubungikami',
    };

    const generatePath = (route: string, lang: 'en' | 'id') => {
        if (lang === 'id') {
          const mappedRoute = routeMapping[route] || route;
          return `/${mappedRoute}`;
        } else {
          return `/${route}`;
        }
    };

    return (
        <div className="bg-[#F9F9F9] w-full justify-center pt-[150px] pb-[150px]">
            <div className="max-w-7xl mx-auto">
                <div className='flex flex-wrap gap-y-[50px] gap-x-[100px] px-6 justify-start'>
                    <div className="flex-col flex justify-between max-w-[400px] gap-y-[50px] px-2">
                        <Link href={`/${lang === 'id' ? 'id' : ''}`}>
                            <Image src={Logo} alt="logo" className="w-[100px]"></Image>
                        </Link>
                        <div className="flex flex-col text-[#033C5A]">
                            <h1 className="text-[25px] font-semibold">Address</h1>
                            <p className="text-[18px] font-normal">Jl. KH. Agus Salim No.15, RT.002/RW.05,
                                Poris Plawad, Kec. Cipondoh, Kota Tangerang,
                                Banten 15141</p>
                        </div>
                        <p className="text-[18px] font-normal text-[#033C5A]">Copyright @ 2024 pancabudilogistindo.co.id
                            All rights reserved.</p>
                    </div>
                    <div className="flex flex-col justify-between max-w-[500px] gap-y-[50px] px-2 ">
                        <ul className="flex flex-wrap text-[#033C5A] max-md:flex-col">
                            <li>
                                <Link href={generatePath('aboutus', lang as 'en' | 'id')} className="font-medium text-[17px] hover:text-[#2c365a] pr-5 py-3 max-md:pr-[0px] flex items-center transition duration-150 ease-in-out">{navbarText[lang as 'en' | 'id'].about}</Link>
                            </li>
                            <li>
                                <Link href={generatePath('services', lang as 'en' | 'id')} className="font-medium text-[17px] hover:text-[#2c365a] px-5 py-3 max-md:px-[0px] flex items-center transition duration-150 ease-in-out">{navbarText[lang as 'en' | 'id'].services}</Link>
                            </li>
                            <li>
                                <Link href={generatePath('article', lang as 'en' | 'id')} className="font-medium text-[17px] hover:text-[#2c365a] px-5 py-3 max-md:px-[0px] flex items-center transition duration-150 ease-in-out">{navbarText[lang as 'en' | 'id'].article}</Link>
                            </li>
                            <li>
                                <Link href={generatePath('contactus', lang as 'en' | 'id')} className="font-medium text-[17px] hover:text-[#2c365a] pl-5 py-3 max-md:pl-[0px] flex items-center transition duration-150 ease-in-out">{navbarText[lang as 'en' | 'id'].contact}</Link>
                            </li>
                        </ul>
                        <div className="flex flex-col text-[#033C5A]">
                            <h1 className="text-[25px] font-semibold">Email</h1>
                            <p className="text-[18px] font-normal mb-[10px]">support@pancabudilogistindo.co.id</p>
                            <h1 className="text-[25px] font-semibold">Work Hours</h1>
                            <p className="text-[18px] font-normal">Monday - Friday, 09.00 - 21.00 GMT +7</p>
                        </div>
                        <div className='flex ml-[-12px]'>
                            <Link href="/">
                                <Image src={sos} alt='tes' className='w-[70px]'></Image>
                            </Link>
                            <Link href="/">
                                <Image src={sos1} alt='tes' className='w-[70px]'></Image>
                            </Link>
                            <Link href="/">
                                <Image src={sos2} alt='tes' className='w-[70px]'></Image>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
