import { Icon } from "@iconify/react";
import { Link } from "react-router";
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
      className={`sticky top-1 z-10 flex flex-col border-l bg-white dark:bg-clrCoal text-clrWhite border-clrDarkBrown/50 dark:border-clrDarkGreen/80 origin-right duration-200 ${
        isSidebarOpen ? "w-full max-w-72 sm:w-52" : "w-0 md:w-16"
      }`}
    >
      {/* Toggle button */}
      <FrameContainer
        backgroundColor={1}
        preferredStyles="absolute top-14 -left-3 hover:dark:shadow-[0_0_6px_#41914e] hover:shadow-[0_0_6px_#dda15e50] duration-200 overflow-hidden"
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`flex items-center justify-center rounded bg-white dark:bg-clrCoal overflow-hidden duration-200 ${
            isSidebarOpen ? "rotate-0" : "rotate-180"
          }`}
        >
          <Icon
            icon="iconamoon:arrow-right-2"
            className="w-5 h-5 text-clrLightBrown dark:text-green-100"
          />
        </button>
      </FrameContainer>

      <nav className="flex flex-col h-full px-2 py-3 gap-14">
        <div
          className="flex items-center justify-center gap-1 font-bold tracking-wider text-clrLightGreen"
          dir="ltr"
        >
          <span
            className={`${
              isSidebarOpen
                ? "scale-x-100 opacity-100"
                : "scale-x-95 opacity-0 absolute"
            } origin-right duration-200`}
          >
            Trip
          </span>
          <Icon
            icon="ph:campfire"
            className="w-7 h-7 text-orange-400 drop-shadow-[0_0_2px_orange]"
          />
          <span
            className={`${
              isSidebarOpen
                ? "scale-x-100 opacity-100"
                : "scale-x-95 opacity-0 absolute"
            } origin-left duration-200`}
          >
            Therapy
          </span>
        </div>
        <ul className="flex flex-col flex-1 gap-4">
          {sidebarItems.map((item, index) => {
            return (
              <li
                key={index}
                className={`${
                  isSidebarOpen ? "" : "items-center justify-center"
                } flex relative w-full p-px rounded-lg hover:bg-gradient-to-br hover:dark:from-clrLightGreen/40 hover:dark:via-clrGreen/10 hover:dark:to-clrLightGreen/40 hover:from-clrDarkBrown/50 hover:via-clrDarkBrown/20 hover:to-clrDarkBrown/50 hover:shadow-[0_0_10px_#dda15e50] hover:dark:shadow-[0_0_10px_#41914e50] hover:-translate-x-1 duration-200`}
              >
                <Link
                  className={`flex gap-2 p-1 rounded-lg items-center bg-white dark:bg-clrCoal w-full ${
                    !isSidebarOpen && "items-center justify-center h-9"
                  }`}
                >
                  <Icon
                    icon={item.icon}
                    className="w-6 h-6 text-clrDarkBrown dark:text-clrWhite"
                  />
                  <span
                    className={`${
                      isSidebarOpen
                        ? "scale-x-100 delay-200"
                        : "scale-x-0 absolute "
                    } origin-right duration-100 text-clrDarkGray dark:text-clrWhite`}
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
            } flex relative w-full p-px rounded-lg hover:bg-gradient-to-br hover:dark:from-clrLightGreen/40 hover:dark:via-clrGreen/10 hover:dark:to-clrLightGreen/40 hover:from-clrDarkBrown/50 hover:via-clrDarkBrown/20 hover:to-clrDarkBrown/50 hover:shadow-[0_0_10px_#dda15e50] hover:dark:shadow-[0_0_10px_#41914e50] hover:-translate-x-1 duration-200`}
          >
            <Link
              className={`flex gap-2 p-1 rounded-lg items-center bg-white dark:bg-clrCoal w-full ${
                !isSidebarOpen && "items-center justify-center h-9"
              }`}
            >
              <Icon
                icon="ph:power"
                className="w-6 h-6 text-clrDarkBrown dark:text-clrWhite"
              />
              <span
                className={`${
                  isSidebarOpen
                    ? "scale-x-100 delay-200"
                    : "scale-x-0 absolute "
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