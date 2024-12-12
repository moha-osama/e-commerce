import Image from "next/image";
import React from "react";

const bannerItems = [
  {
    title: "Playstation 5",
    description:
      "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.",
    img: "/banner/playStation.png",
    smImg: "/banner/playStation-sm.png",
  },
  {
    title: "Apple AirPods Max",
    description: "Computational audio. Listen, it's powerful",
    img: "/banner/hero__gnfk5g59t0qe_xlarge_2x 1.png",
    smImg: "/banner/hero__gnfk5g59t0qe_xlarge_2x 1-sm.png",
  },
  {
    title: "Apple Vision Pro",
    description: "An immersive way to experience entertainment",
    img: "/banner/image 36.png",
    smImg: "/banner/image 36-sm.png",
  },
  {
    title: "Macbook Air",
    description:
      "The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.",
    img: "/banner/macBook-pro.png",
    smImg: "/banner/macBook-pro-sm.png",
  },
];

const Banner = () => {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 row-span-2">
        <div className="min-h-[31.5rem] md:min-h-max order-3 md:order-1 md:col-span-2">
          {/* Playstation 5 */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start h-full">
            <div className="relative">
              <Image
                src={bannerItems[0].img}
                width={272}
                height={272}
                quality={100}
                alt={bannerItems[0].title}
                className=" pt-10 pb-10 md:pt-0 md:hidden"
              />
              <Image
                src={bannerItems[0].smImg}
                width={272}
                height={272}
                quality={100}
                alt={bannerItems[0].title}
                className=" pt-10 md:pt-0 hidden md:block"
              />
            </div>
            <div className="flex flex-col gap-4 justify-center text-center md:text-start w-96  pb-10 pt-6 md:p-4 px-12">
              <h1 className="text-4xl md:text-5xl font-medium">
                {bannerItems[0].title}
              </h1>
              <p className="text-[#909090] text-[1rem] md:text-[0.875rem]">
                {bannerItems[0].description}
              </p>
            </div>
          </div>
        </div>
        <div className="min-h-[31.5rem] md:min-h-max order-4 md:order-2 md:col-span-2 row-span-2 bg-[#EDEDED]">
          {/* Macbook Air */}
          <div className="flex flex-col-reverse md:flex-row items-center h-full">
            <div className="text-center md:text-start px-6 pb-10 pt-6 md:p-14 gap-4 flex flex-col">
              <h1 className="text-4xl md:text-[4rem] font-light leading-[3.5rem]">
                <strong className="font-bold">Macbook</strong> Air
              </h1>
              <p className="text-[#909090] text-[1rem] md:text-[0.875rem]">
                {bannerItems[3].description}
              </p>
              <div>
                <button className="bg-inherit border border-black text-black px-14 py-4 rounded-md hover:bg-white hover:text-[#211C24] duration-300">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                quality={100}
                src={bannerItems[3].img}
                width={330}
                height={330}
                alt={bannerItems[3].title}
                className="pt-10 md:pt-0 md:hidden"
              />
              <Image
                quality={100}
                src={bannerItems[3].smImg}
                width={512}
                height={512}
                alt={bannerItems[3].title}
                className="pt-10 md:p-0 hidden md:block"
              />
            </div>
          </div>
        </div>
        <div className="min-h-[31.5rem] md:min-h-max order-1 md:order-3 md:col-span-1 bg-[#EDEDED]">
          {/* Apple AirPods Max */}
          <div className="flex flex-col md:flex-row items-center justify-center h-full">
            <div className="relative">
              <Image
                quality={100}
                src={bannerItems[1].img}
                width={272}
                height={272}
                alt={bannerItems[1].title}
                className="w-[192[px] md:[w-272px] p-10 md:p-0 md:hidden"
              />
              <Image
                quality={100}
                src={bannerItems[1].smImg}
                width={104}
                height={104}
                alt={bannerItems[1].title}
                className="w-[192[px] md:[w-272px] p-10 md:p-0 hidden md:block"
              />
            </div>
            <div className="flex flex-col pt-6 pb-10 md:p-12 text-center md:text-start">
              <h1 className="text-4xl md:text-xl font-medium">
                Apple AirPods <strong>Max</strong>
              </h1>
              <p className="text-[#909090] text-[1rem] md:text-[0.875rem]">
                {bannerItems[1].description}
              </p>
            </div>
          </div>
        </div>
        <div className="min-h-[31.5rem] md:min-h-max order-2 md:order-4 md:col-span-1 bg-[#353535]">
          {/* Apple Vision Pro */}
          <div className="flex flex-col md:flex-row items-center justify-center h-full">
            <div className="relative">
              <Image
                quality={100}
                src={bannerItems[2].img}
                width={190}
                height={190}
                alt={bannerItems[2].title}
                className="w-[326px] md-[190px] pt-10 md:pt-0 md:hidden"
              />
              <Image
                quality={100}
                src={bannerItems[2].smImg}
                width={136}
                height={136}
                alt={bannerItems[2].title}
                className=" pt-10 md:pt-0 hidden md:block"
              />
            </div>
            <div className="text-center md:text-start pb-10 pt-6 md:p-4 ">
              <h1 className="text-4xl md:text-xl font-medium text-white">
                {bannerItems[2].title}
              </h1>
              <p className="text-[#909090] text-[1rem] md:text-[0.875rem]">
                {bannerItems[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
