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
    <header className="z-50 flex items-center justify-between w-full sticky top-0 h-12 px-6 py-2 border-b backdrop-blur bg-white dark:bg-clrCoal/50 border-clrDarkBrown/30 dark:border-clrDarkGreen/80">
      <div className="flex gap-6 items-center">
        <Link to="" title="سبد خرید">
          <Icon
            icon="ph:shopping-cart"
            className="w-5 h-5 text-clrLightBrown dark:text-clrWhite"
          />
        </Link>
        <button className="" title="اعلانات اخیر">
          <Icon icon="ph:bell" className="w-5 h-5 text-clrLightBrown dark:text-clrWhite" />
        </button>

        {/* Add ThemeToggle here */}
        <ThemeToggle />
      </div>

      {/* Quick Access Button */}
      <FrameContainer backgroundColor={3} preferredStyles="rounded-full hover:dark:shadow-[2px_2px_6px_#41914e80] hover:shadow-[0_0_6px_#dda15e50] duration-300">
        <button onClick={() => {setShowMenu(!showMenu)}} className="relative">
          <div className="flex items-center gap-2 p-2 rounded-full bg-white dark:bg-clrCoal">
            <Icon icon="ph:user" className="w-5 h-5 text-clrLightBrown dark:text-clrWhite" />
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
            <div className="relative flex flex-col items-start w-full rounded-xl bg-clrCoal">
              <ul className="flex flex-col w-full gap-1 p-2 mb-1 text-sm text-clrWhite">
                {menuItems.map((item, index) => {
                  return (
                    <div className="p-px transition-all duration-100 rounded-lg bg-clrCoal hover:bg-clrDarkGreen hover:shadow-[0_0_5px_#41914e40]">
                      <li
                        key={index}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-clrCoal "
                      >
                        <Icon
                          icon={item.icon}
                          className={`mt-1 w-5 h-5 ${
                            item.title == "خروج"
                              ? "text-clrDarkBrown"
                              : "text-clrLightGreen"
                          }`}
                        />
                        <Link>
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
    </header>
  );
}

export default Header