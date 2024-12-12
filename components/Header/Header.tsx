import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="border-b md:border-none ">
      <div className="hidden md:block lg:container px-8 lg:px-0 mx-auto my-0">
        <DesktopNav />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
