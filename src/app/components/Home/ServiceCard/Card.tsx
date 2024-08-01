import Image, { StaticImageData } from 'next/image';

interface CardProps {
  title: string;
  desc: string;
  image: StaticImageData;
  className?: string; // Add className to the CardProps type
}

const Card: React.FC<CardProps> = ({ title, desc, image, className}) => {
  return (
    <div className={`flex flex-col justify-start items-center bg-white w-[310px] h-[500px] max-md:h-[450px] rounded-2xl drop-shadow-2xl px-8 py-24 ${className}`}>
      <Image src={image} alt="tes" className="max-h-[240px] w-auto mt-[-40px]" />
      <h1 className="flex text-center text-[22px] font-semibold text-[#033C5A] min-h-[90px] items-center mb-[10px]">{title}</h1>
      <p className="text-center text-[15px] text-black">{desc}</p>
    </div>
    )
}

export default Card;