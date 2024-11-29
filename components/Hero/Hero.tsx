import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-bg md:h-[40rem]">
      <div className="lg:container px-4 mx-auto my-0">
        <div className="grid justify-items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6 place-content-center flex flex-col items-center text-center md:text-start md:items-start gap-6 pt-20 md:pt-0">
            <h3 className="opacity-40 text-2xl font-semibold leading-9 text-white">
              Pro.Beyond.
            </h3>
            <h1 className="text-white text-7xl xl:text-8xl font-thin leading-[4.5rem] tracking-tighter">
              IPhone 14 <strong className="font-semibold">Pro</strong>
            </h1>
            <p className="text-[#909090] font-medium leading-6 text-lg">
              Created to change everything for the better. For everyone
            </p>
            <div>
              <button className="bg-inherit border border-white text-white px-14 py-4 rounded-md hover:bg-white hover:text-[#211C24] duration-300">
                Shop Now
              </button>
            </div>
          </div>
          <div className="md:col-span-6 flex items-end">
            <div className="relative">
              <Image
                className="hidden md:block"
                src="/banner/iphone-image.png"
                width={411}
                height={411}
                quality={100}
                alt="iphone 14"
              />
              <Image
                className="md:hidden"
                src="/banner/iphone-image-small.png"
                width={411}
                height={411}
                quality={100}
                alt="iphone 14"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
