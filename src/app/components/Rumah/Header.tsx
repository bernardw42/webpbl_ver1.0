export default function Header() {

  return (
    <div className="relative bg-[#033C5A] w-full h-screen overflow-hidden">
      <video className="absolute w-full h-full object-cover bg-fixed opacity-50" autoPlay muted loop>
        <source src="/home/pbl.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex justify-end max-w-7xl mx-auto items-center text-white px-10">
        <div className="text-right w-[60%] max-md:w-[90%] drop-shadow-2xl">
          <h1 className="text-4xl pb-[10px] md:text-5xl sm:text-4xl lg:text-6xl font-bold">Pengiriman Cepat</h1>
          <h1 className="text-4xl pb-[10px] md:text-5xl sm:text-4xl lg:text-6xl font-bold">Dengan</h1>
          <h1 className="text-4xl pb-[50px] md:text-5xl sm:text-4xl lg:text-6xl font-bold text-[#FF2727]">Panca Budi Logistindo</h1>
          <p className="text-xl md:text-2xl lg:text-[20px] font-light">Bersama dengan tim yang berpengalaman dan profesional dalam logistik dan manajemen rantai pasokan, kami menawarkan solusi logistik terbaik dengan keahlian dan jaringan yang meluas di seluruh Indonesia.</p>
        </div>
      </div>
    </div>
  );
}
