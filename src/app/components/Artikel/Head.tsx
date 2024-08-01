"use client";

import { useState, useEffect, SetStateAction } from 'react';
import { useInView } from 'react-intersection-observer';
import { Transition } from 'react-transition-group';
import Card from './Card/Card';
import img from "../../../../public/article/a.jpg";
import img2 from "../../../../public/article/b.jpg";
import img3 from "../../../../public/article/c.jpg";
import img4 from "../../../../public/article/d.jpg";
import img5 from "../../../../public/article/e.jpg";
import img6 from "../../../../public/article/f.jpg";
import Pagination from './Pagination';

const posts = [
  {
    id: 1,
    title: 'DIGITAL CONSULTANCY',
    date: "16 January 2024",
    desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a measurable Return on Investment (ROI).",
    image: img,
  },
  {
    id: 2,
    title: 'CONVERSION RATE OPTIMIZATION',
    date: "16 January 2024",
    desc: "We've developed an approach to shaping digital strategies for our client that result in defining prioritized cost-effective solutions that deliver a measurable Return on Investment",
    image: img2,
  },
  {
    id: 3,
    title: 'ONLINE REPUTATION MANAGEMENT',
    date: "16 January 2024",
    desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
    image: img3,
  },
  {
    id: 4,
    title: 'ONLINE REPUTATION MANAGEMENT',
    date: "16 January 2024",
    desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
    image: img4,
  },
  {
    id: 5,
    title: 'ONLINE REPUTATION MANAGEMENT',
    date: "16 January 2024",
    desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
    image: img5,
  },
  {
    id: 6,
    title: 'ONLINE REPUTATION MANAGEMENT',
    date: "16 January 2024",
    desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
    image: img6,
  },
  {
    id: 7,
    title: 'ONLINE REPUTATION MANAGEMENT',
    date: "16 January 2024",
    desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
    image: img6,
  },
  {
    id: 8,
    title: 'ONLINE REPUTATION MANAGEMENT',
    date: "16 January 2024",
    desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
    image: img6,
  },
];

export default function Head() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [email, setEmail] = useState('');

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: '-150px 0px',
  });

  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  });

  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    if (titleInView) {
      setShowTitle(true);
    }
  }, [titleInView]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setPostsPerPage(window.innerWidth <= 768 ? 3 : 6);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial width

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="bg-white w-full min-h-screen flex flex-col items-center pt-32 pb-48">
        <div className="max-w-7xl w-full flex flex-col px-8 mb-16" ref={titleRef}>
          <h1 className={`text-[#033C5A] font-bold text-4xl mb-16 max-lg:text-center transition-opacity duration-1000 ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
            Artikel
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12" ref={cardRef}>
            {currentPosts.map((post, index) => (
              <Transition key={post.id} in={cardInView} timeout={300 * index}>
                {(state) => (
                  <Card
                    {...post}
                    className={`${
                      state === 'entered' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-70px]'
                  } transition-all duration-[1000ms] ease-in-out`}
                  />
                )}
              </Transition>
            ))}
          </div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
        <h2 className="text-center font-semibold text-xl px-8 text-[#033C5A] mb-8">
          Bergabunglah dengan newsletter kami untuk mendapatkan update terbaru
        </h2>
        <div className="flex flex-col items-center bg-[#033C5A] p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold text-white mb-4">Mulai Berlangganan</h2>
          <form
            action="https://gmail.us22.list-manage.com/subscribe/post?u=89947613f5abc3396728ec743&amp;id=5021ecc621&amp;f_id=0034d1e1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="w-full flex flex-col items-center"
            target="_blank"
          >
            <div className="w-full mb-4">
              <label htmlFor="mce-EMAIL" className="block text-white mb-2">
                Alamat Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                placeholder="Masukan Alamat Email"
                className="appearance-none rounded-full w-full px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white rounded-full py-2 px-4 font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition ease-in-out duration-300"
            >
              Langganan
            </button>
            <div id="mce-responses" className="w-full mt-4">
              <div className="response text-red-500" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response text-green-500" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              <input type="text" name="b_89947613f5abc3396728ec743_5021ecc621" value="" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}