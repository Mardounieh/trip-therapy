import { Icon } from "@iconify/react"
import { Link } from "react-router"
import FrameContainer from "../../UI/FrameContainer";
import { useState } from "react";
import FloatingBall from "../../UI/FloatingBall";


const Header = () => {
  const menuItems = [
    {
      icon: "solar:map-bold",
      title: "سفرهای من",
      link: ""
    },
    {
      icon: "solar:heart-bold",
      title: "علاقه‌مندی‌ها",
      link: ""
    },
    {
      icon: "solar:card-bold",
      title: "تراکنش‌ها",
      link: ""
    },
    {
      icon: "solar:bag-4-bold",
      title: "آذوقه",
      link: ""
    },
    {
      icon: "solar:settings-bold",
      title: "حساب",
      link: ""
    },
    {
      icon: "solar:logout-2-bold",
      title: "خروج",
      link: ""
    },
  ]

  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <header className="flex items-center justify-between w-full h-12 px-5 backdrop-blur">
      <div className="flex gap-6">
        <Link to="" title="سبد خرید">
          <Icon
            icon="streamline:baggage-solid"
            className="w-5 h-5 text-clrWhite"
          />
        </Link>
        <button className="" title="اعلانات اخیر">
          <Icon icon="ic:round-mail" className="w-6 h-6 text-clrWhite" />
        </button>
      </div>

      {/* Quick Access Button */}
      <FrameContainer backgroundColor={1}>
        <button onClick={() => {setShowMenu(!showMenu)}} className="relative">
          <div className="flex items-center gap-2 px-2 py-1 rounded bg-clrCoal/50">
            <Icon icon="solar:user-circle-bold" className="w-6 h-6 text-clrWhite" />
          </div>
          {/* Quick Access Menu */}
          <FrameContainer
            backgroundColor={2}
            preferredStyles={`${
              showMenu
                ? "translate-y-0 opacity-100 pointer-events-auto"
                : "-translate-y-2 opacity-0 pointer-events-none"
            } absolute left-0 top-9 z-10 w-full min-w-36 duration-300`}
          >
            <div className="relative z-10 flex flex-col items-start w-full rounded bg-clrCoal/50">
              <ul className="z-10 flex flex-col w-full gap-1 p-1 mb-1 text-sm text-clrWhite">
                {menuItems.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-2 px-3 py-2 rounded hover:bg-clrWhite/10">
                      <Icon
                        icon={item.icon}
                        className={`mt-1 ${
                          item.title == "خروج"
                            ? "text-clrDarkBrown"
                            : "text-clrLightGreen"
                        }`}
                      />
                      <Link
                        className={`${
                          item.title == "خروج" ? "text-clrLightBrown" : ""
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
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