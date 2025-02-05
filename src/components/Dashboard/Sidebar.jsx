import { Icon } from "@iconify/react";
import { Link } from "react-router";

import logo from "../../assets/logo/TripTherapy.png"
import FrameContainer from "../../UI/FrameContainer";

const Sidebar = ({isSidebarOpen, setIsSidebarOpen}) => {
  const sidebarItems = [
    {
      icon: "si:dashboard-vert-line",
      title: "پیشخان",
      link: ""
    },
    {
      icon: "iconamoon:ticket-light",
      title: "خرید بلیط",
      link: ""
    },
    {
      icon: "solar:map-linear",
      title: "سفرهای من",
      link: ""
    },
    {
      icon: "solar:card-outline",
      title: "تراکنش‌ها",
      link: ""
    },
    {
      icon: "solar:heart-linear",
      title: "علاقه‌مندی‌ها",
      link: ""
    },
    {
      icon: "ph:headset",
      title: "پشتیبانی",
      link: ""
    },
    {
      icon: "fluent:backpack-28-regular",
      title: "توشه",
      link: ""
    },
    {
      icon: "solar:settings-linear",
      title: "حساب",
      link: ""
    },
  ]
  
  return (
    <aside
      className={`${
        isSidebarOpen ? "w-full max-w-72 md:w-52" : "w-0 md:w-16"
      } h-screen duration-300 sticky top-0 bottom-0 border-l border-clrLightBrown dark:border-clrGreen flex flex-col bg-clrMilk dark:bg-clrCoal text-clrWhite z-20`}
    >
      <div className="relative flex items-center justify-center">
        <img
          src={logo}
          alt="TripTherapy logo"
          className={`mix-blend-multiply w-10 h-10`}
        />
      </div>

      <FrameContainer
        backgroundColor={1}
        preferredStyles={`absolute top-9 hover:dark:shadow-[0_0_5px_#41914e] duration-500 ${
          isSidebarOpen ? "-left-3" : "-left-7 md:-left-3"
        }`}
      >
        <button
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
          className="flex items-center justify-center rounded bg-clrMilk dark:bg-clrCoal"
        >
          <Icon
            icon="iconamoon:arrow-left-2"
            className={`w-5 h-5 rotate text-clrDarkBrown dark:text-clrWhite duration-200 ${
              isSidebarOpen && "-rotate-180"
            }`}
          />
        </button>
      </FrameContainer>

      <nav className="flex flex-col px-3 py-3 justify-between h-full">
        <ul className="flex flex-col gap-2">
          {sidebarItems.map((item, index) => {
            return (
              <li
                key={index}
                className={`${
                  isSidebarOpen
                    ? ""
                    : "items-center justify-center scale-0 md:scale-100"
                } flex relative w-full p-px rounded-lg hover:bg-gradient-to-br hover:dark:from-clrLightGreen/40 hover:dark:via-clrGreen/10 hover:dark:to-clrLightGreen/40 hover:from-clrDarkBrown/50 hover:via-clrDarkBrown/20 hover:to-clrDarkBrown/50 hover:shadow-[0_0_10px_#dda15e50] hover:dark:shadow-[0_0_10px_#41914e50] hover:-translate-y-1 duration-500`}
              >
                <Link
                  className={`flex gap-2 p-1 h-9 rounded-lg items-center bg-clrMilk dark:bg-clrCoal w-full duration-200 ${
                    !isSidebarOpen && "items-center justify-center"
                  }`}
                >
                  <Icon
                    icon={item.icon}
                    className="w-5 h-5 lg:w-6 md:h-6 text-clrDarkBrown dark:text-clrWhite"
                  />
                  <span
                    className={`${
                      isSidebarOpen
                        ? "scale-x-100"
                        : "scale-x-0 absolute"
                    } origin-right duration-100 text-xs md:text-sm text-clrDarkGray dark:text-clrWhite`}
                  >
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="relative w-full">
          <button
            className={`${
              isSidebarOpen ? "" : "items-center justify-center"
            } flex relative w-full p-px rounded-lg hover:bg-gradient-to-br hover:dark:from-clrLightGreen/40 hover:dark:via-clrGreen/10 hover:dark:to-clrLightGreen/40 hover:from-clrDarkBrown/50 hover:via-clrDarkBrown/20 hover:to-clrDarkBrown/50 hover:shadow-[0_0_10px_#dda15e50] hover:dark:shadow-[0_0_10px_#41914e50] hover:-translate-y-1 duration-200`}
          >
            <Link
              className={`flex gap-2 p-1 rounded-lg items-center bg-clrMilk dark:bg-clrCoal w-full ${
                !isSidebarOpen &&
                "items-center justify-center h-9 scale-0 md:scale-100"
              }`}
            >
              <Icon
                icon="ph:power"
                className="w-5 h-5 lg:w-6 lg:h-6 text-clrDarkBrown dark:text-clrWhite"
              />
              <span
                className={`${
                  isSidebarOpen ? "scale-x-100 delay-200" : "scale-x-0 absolute"
                } origin-right duration-100 text-clrDarkGray dark:text-clrWhite`}
              >
                خروج
              </span>
            </Link>
          </button>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar