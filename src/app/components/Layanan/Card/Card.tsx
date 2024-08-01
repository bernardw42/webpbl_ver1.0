import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  desc: string;
  className?: string; // Add className to the CardProps type
}

const Card: React.FC<CardProps> = ({ title, desc, className}) => {
  return (
    <div className={`flex flex-col justify-between items-center bg-white max-w-[500px] rounded-lg drop-shadow-2xl px-8 py-14 ${className}`} style={{ padding: '20px' }}>
        <div className="flex flex-col justify-center items-center text-center rounded-lg p-10 max-sm:p-6 border-dotted border-[2px] border-[#033C5A]">
            <h1 className="text-[28px] font-bold mb-[10px] text-[#FF2626] relative">
                {title}
            </h1>
            <span className="flex w-[80%] h-1 bg-[#033C5A] mb-[15px]"></span>
            <p className="text-[16px] text-black">{desc}</p>
        </div>
    </div>



    )
}

export default Card;