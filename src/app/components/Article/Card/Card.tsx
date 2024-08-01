import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  date: string;
  desc: string;
  image: StaticImageData;
  className?: string; // Add className to the CardProps type
}

const Card: React.FC<CardProps> = ({ title, date, desc, image, className }) => {
  return (
    <div className={`relative flex flex-col max-w-[360px] ${className}`}>
      <div className='bg-gray-600 rounded-t-2xl drop-shadow-xl min-h-[200px] max-w-[360px] overflow-hidden'>
        <Image src={image} alt="tes" layout="fill" objectFit="cover" className="rounded-t-2xl drop-shadow-xl" />
      </div>
      <div className='bg-white flex flex-col justify-start min-h-[280px] drop-shadow-2xl rounded-b-xl px-8 py-8 border-r-red-500'>
        <h2 className="text-[18px] font-medium min-h-[65px] max-h-[65px]">{title}</h2>
        <p className="text-[12px] min-h-[35px] max-h-[35px] text-gray-500">{date}</p>
        <p className="text-[12px] min-h-[100px] max-h-[100px] font-normal">{desc}</p>
        <ul>
          <li>
            <Link href="/services" className="inline-block bg-red-500 hover:bg-red-700 text-white font-semibold rounded-full px-3 py-2 transition duration-150 ease-in-out text-[16px]">
              READ MORE
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Card;
