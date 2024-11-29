"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { navItems } from "@/constants";
import Link from "next/link";

const MobileNav = () => {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full flex items-center justify-between px-6 py-4">
      <div>Shop</div>
      <button onClick={() => setMobileNavOpen((preState) => !preState)}>
        <Image
          className=""
          src="icons/menu.svg"
          width={40}
          height={40}
          alt="menu"
        />
      </button>
      {/* <motion.nav
        className="absolute top-[72px] left-0 w-full h-[calc(100vh-72px)]"
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
      >
        <ul className="flex flex-col h-3/4 items-center justify-center gap-11">
          {navItems.map((item) => (
            <Link href="/" key={item.id}>
              {item.navTitle}
            </Link>
          ))}
        </ul>
      </motion.nav> */}
    </div>
  );
};

export default MobileNav;
