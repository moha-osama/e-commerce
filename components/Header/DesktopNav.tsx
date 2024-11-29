import React from "react";
import Image from "next/image";
import { navItems } from "@/constants";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <div className="flex items-center justify-around w-full py-4 2xl:px-40">
      <div className="xl:flex-1 pr-8">Shop</div>
      <form>
        <div className="flex w-52 lg:w-72 xl:w-96 py-4 px-4 bg-[#F5F5F5] rounded-lg gap-2">
          <Image
            src="icons/Search.svg"
            width={24}
            height={24}
            quality={100}
            alt="search"
          />
          <input
            type="text"
            className="bg-inherit w-full outline-none"
            placeholder="Search"
          />
        </div>
      </form>
      <nav className="flex-[2] flex justify-center lg:justify-end">
        <ul className="flex w-fit items-center gap-8 lg:gap-14">
          {navItems.map((item) => (
            <Link href="/" key={item.id}>
              {item.navTitle}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="lg:flex-1 flex justify-end gap-6">
        <button>
          <Image
            src="icons/Favorites.svg"
            width={32}
            height={32}
            alt="Favorites"
          />
        </button>
        <button>
          <Image src="icons/Cart1.svg" width={32} height={32} alt="Favorites" />
        </button>
        <button>
          <Image src="icons/User.svg" width={32} height={32} alt="Favorites" />
        </button>
      </div>
    </div>
  );
};

export default DesktopNav;
