import { Icon } from "@iconify/react"
import { Link } from "react-router"
import FrameContainer from "../../UI/FrameContainer";
import { useState } from "react";
import ThemeToggle from "../../UI/ThemeToggle";

const Header = () => {
  const menuItems = [
    {
      icon: "ph:globe-stand",
      title: "سفرهای من",
      link: ""
    },
    {
      icon: "ph:heart",
      title: "علاقه‌مندی‌ها",
      link: ""
    },
    {
      icon: "ph:credit-card",
      title: "تراکنش‌ها",
      link: ""
    },
    {
      icon: "ph:headset",
      title: "پشتیبانی",
      link: ""
    },
    {
      icon: "solar:settings-linear",
      title: "حساب",
      link: ""
    },
    {
      icon: "ph:power",
      title: "خروج",
      link: ""
    },
  ]

  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <header className="z-10 flex items-center justify-between w-full sticky top-0 h-12 px-10 md:px-6 py-2 border-b backdrop-blur bg-clrMilk dark:bg-clrCoal border-clrLightBrown dark:border-clrGreen">
      <div className="flex gap-6 items-center">
        <FrameContainer backgroundColor={3} preferredStyles="rounded-full">
          <Link to="" title="سبد خرید" className="p-2 bg-white dark:bg-clrCoal rounded-full">
            <Icon
              icon="ph:shopping-cart"
              className="w-4 h-4 sm:w-5 sm:h-5 text-clrDarkBrown dark:text-clrWhite"
            />
          </Link>
        </FrameContainer>

        {/* Toggle Theme */}
        <ThemeToggle />
      </div>

      {/* Logo */}
      <div
        className="hidden xs:flex w-full items-center justify-center gap-1 font-bold tracking-wider text-clrDarkBrown dark:text-clrLightGreen"
        dir="ltr"
      >
        <span className="origin-right duration-200 text-sm sm:text-base">Trip</span>
        <Icon
          icon="ph:campfire"
          className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 drop-shadow-[0_0_2px_orange]"
        />
        <span className="origin-left duration-200 text-sm sm:text-base">Therapy</span>
      </div>

      {/* Quick Access Button */}
      <div className="flex gap-4 items-center">
        <FrameContainer backgroundColor={2} preferredStyles="rounded-full">
          <button className="bg-white dark:bg-clrCoal p-2 rounded-full" title="اعلانات اخیر">
            <Icon
              icon="ph:bell"
              className="w-4 h-4 sm:w-5 sm:h-5 text-clrDarkBrown dark:text-clrWhite"
            />
          </button>
        </FrameContainer>
        <FrameContainer
          backgroundColor={3}
          preferredStyles="rounded-full hover:dark:shadow-[2px_2px_6px_#41914e80] hover:shadow-[0_0_6px_#dda15e50] duration-300"
        >
          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="relative"
          >
            <div className="flex items-center gap-2 p-2 rounded-full bg-white dark:bg-clrCoal">
              <Icon
                icon="ph:user"
                className="w-4 h-4 sm:w-5 sm:h-5 text-clrDarkBrown dark:text-clrWhite"
              />
            </div>
            {/* Quick Access Menu */}
            <FrameContainer
              backgroundColor={1}
              preferredStyles={`${
                showMenu
                  ? "translate-y-0 opacity-100 pointer-events-auto"
                  : "-translate-y-2 opacity-0 pointer-events-none"
              } absolute left-0 top-11 w-full min-w-44 duration-300 rounded-xl`}
            >
              <div className="relative flex flex-col items-start w-full rounded-xl bg-clrMilk dark:bg-clrCoal">
                <ul className="flex flex-col w-full gap-1 p-2 mb-1 text-sm text-clrWhite">
                  {menuItems.map((item, index) => {
                    return (
                      <div className="p-px duration-200 rounded-lg bg-clrMilk hover:shadow-[0_0_1px_#dda15e] dark:bg-clrCoal hover:dark:bg-clrDarkGreen hover:dark:shadow-[0_0_5px_#41914e40]">
                        <li
                          key={index}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-clrMilk dark:bg-clrCoal"
                        >
                          <Icon
                            icon={item.icon}
                            className={`mt-1 w-5 h-5 ${
                              item.title == "خروج"
                                ? "text-clrDarkGreen dark:text-clrDarkBrown"
                                : "text-clrDarkBrown dark:text-clrLightGreen"
                            }`}
                          />
                          <Link className="text-clrDarkGray dark:text-clrWhite">
                            {item.title}
                          </Link>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </FrameContainer>
          </button>
        </FrameContainer>
      </div>
    </header>
  );
}

export default Header