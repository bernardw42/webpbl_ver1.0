// "use client"

// import Image, { StaticImageData } from 'next/image';

// interface CardProps {
//   title: string;
//   desc: string;
//   image: StaticImageData;
//   className?: string; // Add className to the CardProps type
// }

// const Card: React.FC<CardProps> = ({ title, desc, image, className}) => {
//   return (
//     <div className={`flex flex-col justify-between items-center bg-white w-[305px] h-[500px] rounded-2xl drop-shadow-2xl px-8 py-20 ${className}`}>
//       <Image src={image} alt="tes" className="max-h-[240px] w-auto mt-[-20px]" />
//       <div className="text-center">
//         <h1 className="text-[24px] font-medium mb-[10px] text-[#5569B2]">{title}</h1>
//         <p className="text-[12px]">{desc}</p>
//       </div>
//       </div>
//     )
// }

// export default Card;