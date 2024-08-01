import Image, { StaticImageData } from 'next/image';

interface CardProps {
  title: string;
  desc: string;
  image: StaticImageData;
  className?: string; // Add className to the CardProps type
}

const Card: React.FC<CardProps> = ({ title, desc, image, className}) => {
  return (
    <div className={`flex flex-col justify-between items-center bg-white w-[310px] h-[500px] max-md:h-[450px] rounded-2xl drop-shadow-2xl px-8 py-24 ${className}`}>
      <Image src={image} alt="tes" className="max-h-[240px] w-auto mt-[-40px]" />
      <h1 className="text-center text-[22px] font-semibold mb-[10px] text-[#033C5A] ">{title}</h1>
      <p className="text-center text-[13px] text-black">{desc}</p>
    </div>
    )
}

export default Card;