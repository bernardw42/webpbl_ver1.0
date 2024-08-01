'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import WhiteLogo from '../../../public/navbar/logowhite1.png';
import Logo from '../../../public/navbar/logo1.png';
import globe from '../../../public/navbar/world.png';
import MobileMenu from '@/app/components/NavbarMobile';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [lang, setLang] = useState<'en' | 'id'>(() => {
    // Set language to English if accessed at root domain
    return pathname === '/' ? 'en' : (typeof window !== 'undefined' && localStorage.getItem('lang') as 'en' | 'id') || 'en';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Set language based on the initial pathname
    if (pathname === '/') {
      setLang('en');
    } else {
      const storedLang = typeof window !== 'undefined' && localStorage.getItem('lang');
      setLang(storedLang ? (storedLang as 'en' | 'id') : 'en');
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]); // Adding pathname to dependencies

  // const handleLangChange = (lang: 'en' | 'id') => {
  //   const newPath = lang === 'id' ? '/id' : '/';
  //   typeof window !== 'undefined' && localStorage.setItem('lang', lang);
  //   window.location.href = newPath; // Redirect to the new language version of the page
  // };
  // INGET pisah buat set lang and buat redirect on page /id/aboutus

  const handleLangChange = (lang: 'en' | 'id') => {
    localStorage.setItem('lang', lang);
    setLang(lang);
  };

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
    <header className={`fixed w-full z-30 md:bg-opacity-100 transition duration-300 ease-in-out ${scrolled ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-1 max-lg:py-2">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4 z-10">
            <Link href={`/${lang === 'id' ? 'id' : ''}`}>
              <Image src={scrolled ? Logo : WhiteLogo} alt='tes' className='w-[100px] max-md:w-[70px] drop-shadow-2xl' />
            </Link>
          </div>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href={generatePath('aboutus', lang)} className={`font-medium text-[17px] ${scrolled ? 'text-black' : 'text-white'} hover:text-gray-600 px-4 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl`}>{navbarText[lang].about}</Link>
              </li>
              <li>
                <Link href={generatePath('services', lang)} className={`font-medium text-[17px] ${scrolled ? 'text-black' : 'text-white'} hover:text-gray-600 px-4 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl`}>{navbarText[lang].services}</Link>
              </li>
              <li>
                <Link href={generatePath('article', lang)} className={`font-medium text-[17px] ${scrolled ? 'text-black' : 'text-white'} hover:text-gray-600 px-4 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl`}>{navbarText[lang].article}</Link>
              </li>
              <li>
                <Link href={generatePath('contactus', lang)} className={`font-medium text-[17px] ${scrolled ? 'text-black' : 'text-white'} hover:text-gray-600 px-4 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl`}>{navbarText[lang].contact}</Link>
              </li>
              <div className='flex flex-wrap items-center px-4'>
                <Image src={globe} alt='lang' className={`w-[30px] ${scrolled ? 'filter invert' : ''} drop-shadow-2xl`} />
                <Link href="/" className={`font-medium text-[17px] ${scrolled ? 'text-black' : 'text-white'} hover:text-gray-600 px-1 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl focus:outline-none`}>
                  <div onClick={() => handleLangChange('en')} className='px-1 py-3'>EN</div>
                </Link>
                <p className={`font-medium text-[17px] ${scrolled ? 'text-black' : 'text-white'} py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl`}>|</p>
                <Link href="/id" className={`font-medium text-[17px] ${scrolled ? 'text-black' : 'text-white'} hover:text-gray-600 px-1 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl focus:outline-none`}>
                  <div onClick={() => handleLangChange('id')} className='px-1 py-3'>ID</div>
                </Link>
              </div>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}












