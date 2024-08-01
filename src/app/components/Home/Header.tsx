export default function Header() {

  return (
    <div className="relative bg-[#033C5A] w-full h-screen overflow-hidden">
      <video className="w-full h-full object-cover bg-fixed opacity-50" autoPlay muted loop>
        <source src="/home/pbl.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex justify-end max-w-7xl mx-auto items-center text-white px-10">
        <div className="text-right w-[60%] max-md:w-[90%] max-sm:w-[100%] drop-shadow-2xl">
          <h1 className="text-4xl pb-[10px] md:text-5xl sm:text-4xl lg:text-6xl font-bold">Fast Delivery</h1>
          <h1 className="text-4xl pb-[10px] md:text-5xl sm:text-4xl lg:text-6xl font-bold">With</h1>
          <h1 className="text-4xl pb-[50px] md:text-5xl sm:text-4xl lg:text-6xl font-bold text-[#FF2727]">Panca Budi Logistindo</h1>
          <p className="text-xl md:text-2xl lg:text-[20px] font-light">Together with an experienced and professional team with years of experience in logistics and supply chain management (SCM), we offer the best logistics solutions with expertise and network throughout Indonesia.</p>
        </div>
      </div>
    </div>
  );
}
