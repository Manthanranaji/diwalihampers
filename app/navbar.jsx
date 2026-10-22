import Image from "next/image";

export default function NavBar() {
  return (
    <div className="fixed z-50 w-full">
      <div className="h-20 flex justify-between items-center transition-all duration-500 backdrop-blur-sm px-2 md:px-12 py-3 text-sm tracking-widest text-[#B5A898]">
        <a href="#home">
        <Image
            src={"/logo.png"}
            width={140}
            height={140}
            className="-ml-4"
        />
        </a>

        <a 
        href="#fav"
        className="text-[#FFFFFF]/60 font-inter text-xs tracking-widest px-4">
            Our Hampers
        </a>

      </div>
    </div>
  );
}