import { useState } from "react";

import { brainwave } from "../assets";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import Button from "./Button";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => setOpenNavigation((open) => !open);
  const closeNavigation = () => setOpenNavigation(false);

  return (
    <div
      className="fixed top-0 z-50 w-full border-b border-n-6 bg-n-8/90 lg:bg-n-8/90 lg:backdrop-blur-sm"
    >
      <div className="container flex items-center py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero" onClick={closeNavigation}>
          <img src={brainwave} alt="img" width={190} height={40} />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed inset-x-0 bottom-0 top-[5rem] flex-col bg-n-8 lg:static lg:mx-auto lg:flex lg:flex-row lg:bg-transparent`}
        >
          <div className="flex h-full flex-col items-center justify-center gap-8 lg:flex-row lg:gap-6">
            {navigation.map((item) => (
              <a
                key={item.id}
                className="text-base font-semibold text-n-1 transition-colors hover:text-color-1"
                href={item.url}
                onClick={closeNavigation}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="ml-auto hidden lg:flex">
          <Button href="#pricing" white>
            Get started
          </Button>
        </div>

        <button
          className="ml-auto inline-flex items-center justify-center lg:hidden"
          onClick={toggleNavigation}
          aria-label="Toggle navigation"
          type="button"
        >
          <MenuSvg openNavigation={openNavigation} />
        </button>
      </div>
    </div>
  );
};

export default Header;
