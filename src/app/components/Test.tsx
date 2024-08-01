// "use client"

// // import React, { useRef } from 'react';
// // import Slider from 'react-slick';
// // import Image from 'next/image';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';
// // import Card from './ServiceCard/Card';
// // import img1 from '../../../public/home/tes (1).png';
// // import img2 from '../../../public/home/tes (2).png';
// // import img3 from '../../../public/home/tes (3).png';
// // import img4 from '../../../public/home/tes (4).png';
// // import img5 from '../../../public/home/tes (5).png';
// // import img6 from '../../../public/home/tes (6).png';
// // import img7 from '../../../public/home/tes (7).png';
// // import left from '../../../public/home/left.png';
// // import right from '../../../public/home/right.png';
// // import { useInView } from 'react-intersection-observer';

// // const CardData = [
// //   {
// //     title: 'DIGITAL CONSULTANCY',
// //     desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a measurable Return on Investment (ROI).",
// //     image: img1,
// //   },
// //   {
// //     title: 'CONVERSION RATE OPTIMIZATION',
// //     desc: "We've developed an asdasdasdasdasd approach to shaping digital strategies for our client that result in defining prioritized cost-effective solutions that deliver a measurable Return on Investment",
// //     image: img2,
// //   },
// //   {
// //     id: 'asdasdqwr',
// //     title: 'ONLINE REPUTATION MANAGEMENT',
// //     desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
// //     image: img3,
// //   },
// //   {
// //     id: 'asdasdqwr',
// //     title: 'ONLINE REPUTATION MANAGEMENT',
// //     desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
// //     image: img4,
// //   },
// //   {
// //     id: 'asdasdqwr',
// //     title: 'ONLINE REPUTATION MANAGEMENT',
// //     desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
// //     image: img5,
// //   },
// //   {
// //     id: 'asdasdqwr',
// //     title: 'ONLINE REPUTATION MANAGEMENT',
// //     desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
// //     image: img6,
// //   },
// //   {
// //     id: 'asdasdqwr',
// //     title: 'ONLINE REPUTATION MANAGEMENT',
// //     desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
// //     image: img7,
// //   },
// // ];

// // const Service = () => {
// //   const sliderRef = useRef(null);
// //   const [ref, inView] = useInView({
// //     triggerOnce: true,
// //     rootMargin: '-200px 0px',
// //   });

// //   const settings = {
// //     dots: false,
// //     infinite: true,
// //     arrows: false,
// //     speed: 500,
// //     slidesToShow: 3,
// //     slidesToScroll: 1,
// //     responsive: [
// //       {
// //         breakpoint: 1024,
// //         settings: {
// //           slidesToShow: 3,
// //         },
// //       },
// //       {
// //         breakpoint: 600,
// //         settings: {
// //           slidesToShow: 1,
// //         },
// //       },
// //     ],
// //   };

// //   const handlePrev = () => {
// //     if (sliderRef.current) {
// //       sliderRef.current.slickPrev();
// //     }
// //   };

// //   const handleNext = () => {
// //     if (sliderRef.current) {
// //       sliderRef.current.slickNext();
// //     }
// //   };

// //   return (
// //     <div className="bg-[#033C5A] w-full pt-[150px] pb-[200px] flex flex-col justify-center items-center" ref={ref}>
// //       <div className="flex flex-col justify-center items-center text-[white]">
// //         <h1 className='text-[40px] max-w-7xl px-6 text-center font-semibold'>Our Service</h1>
// //         <p className='text-[18px] max-w-7xl px-6 text-center mb-[70px] font-extralight'>Panca Budi Logistindo berkomitmen menjadi partner terpercaya di seluruh Indonesia. Inilah 3 alasan tepat untuk memilih Panca Budi Logistindo</p>
// //       </div>
// //       <div id="slide" className={`flex justify-center items-center w-full transition-opacity duration-[2000ms] ${inView ? 'opacity-100' : 'opacity-0'}`}>
// //         <button onClick={handlePrev} className="absolute left-[420px] cursor-pointer z-20">
// //           <Image src={left} alt="Left Arrow" width={50} height={50} />
// //         </button>
// //         <Slider ref={sliderRef} {...settings} className='w-[1000px]'>
// //           {CardData.map((CardDetail, index) => (
// //             <div key={index} className="px-[13px]">
// //               <Card {...CardDetail} />
// //             </div>
// //           ))}
// //         </Slider>
// //         <button onClick={handleNext} className="absolute right-[420px] cursor-pointer z-20">
// //           <Image src={right} alt="Right Arrow" width={50} height={50} />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Service;

// {/* <div className="bg-white w-full pb-[200px] pt-[200px] max-lg:pb-[150px] flex justify-center items-center">
//                 <div className="max-w-7xl flex flex-col justify-center items-center gap-y-[150px] px-8">
//                     <h1 className="text-[25px] text-black text-center font-medium py-4">With more than 200,000 SQM warehouse and more than 500 unit vehicles with 7 variants,
// we don't just handle logistics. PBL also help you succeed by combining technology
// with operational excellence.</h1>
//                     <Image src={poin} alt="point" className="w-[1000px]" />
//                     <Image src={card} alt="card" className="w-[1000px]" />
//                 </div>
//             </div> */}

//             import { useState, useEffect, SetStateAction } from 'react';
// import { Transition } from 'react-transition-group';
// import Card from './Card/Card';
// import img from "../../../../public/article/a.jpg";
// import img2 from "../../../../public/article/b.jpg";
// import img3 from "../../../../public/article/c.jpg";
// import img4 from "../../../../public/article/d.jpg";
// import img5 from "../../../../public/article/e.jpg";
// import img6 from "../../../../public/article/f.jpg";
// import Pagination from './Pagination';

// const posts = [
//   {
//     id: 1,
//     title: 'DIGITAL CONSULTANCY',
//     date: "16 January 2024",
//     desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a measurable Return on Investment (ROI).",
//     image: img,
//   },
//   {
//     id: 2,
//     title: 'CONVERSION RATE OPTIMIZATION',
//     date: "16 January 2024",
//     desc: "We've developed an approach to shaping digital strategies for our client that result in defining prioritized cost-effective solutions that deliver a measurable Return on Investment",
//     image: img2,
//   },
//   {
//     id: 3,
//     title: 'ONLINE REPUTATION MANAGEMENT',
//     date: "16 January 2024",
//     desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
//     image: img3,
//   },
//   {
//     id: 4,
//     title: 'ONLINE REPUTATION MANAGEMENT',
//     date: "16 January 2024",
//     desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
//     image: img4,
//   },
//   {
//     id: 5,
//     title: 'ONLINE REPUTATION MANAGEMENT',
//     date: "16 January 2024",
//     desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
//     image: img5,
//   },
//   {
//     id: 6,
//     title: 'ONLINE REPUTATION MANAGEMENT',
//     date: "16 January 2024",
//     desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
//     image: img6,
//   },
//   {
//     id: 7,
//     title: 'ONLINE REPUTATION MANAGEMENT',
//     date: "16 January 2024",
//     desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
//     image: img6,
//   },
//   {
//     id: 8,
//     title: 'ONLINE REPUTATION MANAGEMENT',
//     date: "16 January 2024",
//     desc: "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
//     image: img6,
//   },
// ];

// export default function Head() {
//   const [windowWidth, setWindowWidth] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage, setPostsPerPage] = useState(6);
//   const [animationTrigger, setAnimationTrigger] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//       setPostsPerPage(window.innerWidth <= 768 ? 3 : 6); // Adjust the number of posts per page based on screen size
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize(); // Initial width

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     setAnimationTrigger(false);
//     const timer = setTimeout(() => setAnimationTrigger(true), 100); // Slight delay to trigger re-animation
//     return () => clearTimeout(timer);
//   }, [currentPage]);

//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//   const paginate = (pageNumber: SetStateAction<number>) => {
//     setCurrentPage(pageNumber);
//     window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top when changing pages
//   };

//   return (
//     <>
//       <div className="bg-[white] w-full min-h-[1000px] flex flex-col items-center pt-[230px] pb-[200px]">
//         <div className="max-w-7xl w-full flex flex-col px-8">
//           <h1 className="text-[#033C5A] font-bold md:text-5xl sm:text-4xl lg:text-6xl text-4xl mb-[70px] max-lg:text-center text-left">
//             Article
//           </h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-[100px]">
//             {currentPosts.map((post, index) => (
//               <Transition key={post.id} in={animationTrigger} timeout={400 * index}>
//                 {(state: string) => (
//                   <Card
//                     key={post.id}
//                     {...post}
//                     className={`${
//                       state === 'entered' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-50px]'
//                     } transition-all duration-[1000ms] ease-in-out`}
//                   />
//                 )}
//               </Transition>
//             ))}
//           </div>
//           <Pagination
//             postsPerPage={postsPerPage}
//             totalPosts={posts.length}
//             paginate={paginate}
//             currentPage={currentPage} // Pass the current page to the Pagination component
//           />
//         </div>
//         <h2 className='text-center font-semibold text-[25px] mb-[20px] p-8 text-[#2E364D]'>Join the newsletter to receive the latest updates in your inbox</h2>
//         <div id="mc_embed_shell">
//           <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
//           <div id="mc_embed_shell" className="flex justify-center items-center min-h-screen">
//             <div className="w-full max-w-md">
//               <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
//               <div id="mc_embed_signup" className="bg-white p-6 rounded-lg">
//                 <form action="https://gmail.us18.list-manage.com/subscribe/post?u=a7d9e97578b64681705a56915&amp;id=c868e07f87&amp;f_id=00a19ee6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self" noValidate>
//                   <div id="mc_embed_signup_scroll">
//                     <h2 className="text-lg font-bold mb-4">Subscribe</h2>
//                     <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
//                     <div className="mc-field-group mb-4">
//                       <label htmlFor="mce-EMAIL" className="block">Email Address <span className="asterisk">*</span></label>
//                       <input type="email" name="EMAIL" className="required email border rounded px-3 py-2 w-full" id="mce-EMAIL" placeholder="Your email address" />
//                     </div>
//                     <div id="mce-responses" className="clear foot">
//                       <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
//                       <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
//                     </div>
//                     <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
//                       <input type="text" name="b_a7d9e97578b64681705a56915_c868e07f87" tabIndex={-1} value="" />
//                     </div>
//                     <div className="optionalParent">
//                       <div className="clear foot">
//                         <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded" />
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }