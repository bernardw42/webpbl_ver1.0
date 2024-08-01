"use client"

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/navbar/logo1.png';
import globe from '../../../public/navbar/world.png';

export default function MobileMenuPages() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);  

  // Close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [mobileNavOpen]);

  // Close the mobile menu if the Esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [mobileNavOpen]);

  // Set language based on the initial pathname
  const [lang, setLang] = useState<'en' | 'id'>(() => {
    // Set language to English if accessed at root domain
    return pathname === '/' ? 'en' : (typeof window !== 'undefined' && localStorage.getItem('lang') as 'en' | 'id') || 'en';
  });

  useEffect(() => {
    if (pathname === '/') {
      setLang('en');
    } else {
      const storedLang = typeof window !== 'undefined' && localStorage.getItem('lang');
      setLang(storedLang ? (storedLang as 'en' | 'id') : 'en');
    }
  }, [pathname]);

  // Handle language change
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
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen ? 'active' : ''} z-30 text-black`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        {mobileNavOpen ? (
          // Close icon (X)
          <svg className="w-7 h-7 fill-current font-bold drop-shadow-2xl" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.70711 4.29289C4.31658 3.90237 3.68342 3.90237 3.29289 4.29289C2.90237 4.68342 2.90237 5.31658 3.29289 5.70711L9.58579 12L3.29289 18.2929C2.90237 18.6834 2.90237 19.3166 3.29289 19.7071C3.68342 20.0976 4.31658 20.0976 4.70711 19.7071L11 13.4142L17.2929 19.7071C17.6834 20.0976 18.3166 20.0976 18.7071 19.7071C19.0976 19.3166 19.0976 18.6834 18.7071 18.2929L12.4142 12L18.7071 5.70711C19.0976 5.31658 19.0976 4.68342 18.7071 4.29289C18.3166 3.90237 17.6834 3.90237 17.2929 4.29289L11 10.5858L4.70711 4.29289Z"/>
          </svg>
        ) : (
          // Hamburger icon with stripes
          <svg className="w-7 h-7 fill-current font-bold drop-shadow-2xl" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect y="4" width="24" height="2" />
            <rect y="11" width="24" height="2" />
            <rect y="18" width="24" height="2" />
          </svg>
        )}
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-0 h-[100dvh] z-20 left-0 w-full overflow-scroll bg-[white]"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="flex flex-col justify-between items-center px-5 py-2 pt-[120px] gap-y-[60px]">
            <li>
              <Link href={generatePath('aboutus', lang)} className="font-medium w-full text-black hover:text-gray-600 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>{navbarText[lang].about}</Link>
            </li>
            <li>
              <Link href={generatePath('services', lang)} className="font-medium w-full text-black hover:text-gray-600 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>{navbarText[lang].services}</Link>
            </li>
            <li>
              <Link href={generatePath('article', lang)} className="font-medium w-full text-black hover:text-gray-600 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>{navbarText[lang].article}</Link>
            </li>
            <li>
              <Link href={generatePath('contactus', lang)} className="font-medium w-full text-black hover:text-gray-600 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>{navbarText[lang].contact}</Link>
            </li>
            {/* Language switcher */}
            <div className='flex flex-wrap items-center'>
              <Link href={"/"} className={`font-medium text-[17px] text-black hover:text-gray-600 px-1 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl focus:outline-none`} onClick={() => setMobileNavOpen(false)}>
               <div onClick={() => handleLangChange('en')} className='px-1 py-3'>EN</div>
              </Link>
              <p className={`font-medium text-[17px] text-black py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl`}>|</p>
              <Link href={"/id"} className={`font-medium text-[17px] text-black hover:text-gray-600 px-1 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl focus:outline-none`} onClick={() => setMobileNavOpen(false)}>
                <div onClick={() => handleLangChange('id')} className='px-1 py-3'>ID</div>
              </Link>
            </div>
          </ul>
        </Transition>
      </div>
    </div>
  );
}


