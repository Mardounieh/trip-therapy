import { Icon } from "@iconify/react";
import { Link } from "react-router";
import FrameContainer from "../../UI/FrameContainer";
import { useState } from "react";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: "ic:round-dashboard",
      title: "پیشخان",
      link: ""
    },
    {
      icon: "solar:ticket-bold",
      title: "خرید بلیط",
      link: ""
    },
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
      icon: "fluent:comment-48-filled",
      title: "تیکت‌ها",
      link: ""
    },
    {
      icon: "famicons:fast-food",
      title: "آذوقه",
      link: ""
    },
    {
      icon: "solar:settings-bold",
      title: "حساب",
      link: ""
    },
  ]

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
  return (
    <aside className="sticky top-0 z-10 flex flex-col text-clrWhite min-w-44">
      {/* Floating ball */}
      <div className="absolute rounded-full w-14 h-36 bg-gradient-to-b from-clrLightGreen/5 to-clrBlue animate-float" />
      <nav className="flex flex-col  h-full py-2.5 z-20 backdrop-blur-2xl">
        <div className="flex items-center justify-center text-clrWhite">
          <Icon icon="fa:globe" className="w-7 h-7" />
        </div>
        <ul className="flex flex-col flex-1 gap-4 p-3">
          <Icon icon="" />
          {sidebarItems.map((item, index) => {
            return (
              <li key={index} className="relative w-full p-1 rounded hover:bg-clrGreen hover:shadow-[0_0_10px_#41914e50] duration-200">
                <Link className="flex gap-2 item-center">
                  <Icon icon={item.icon} className="w-6 h-6" />
                    <span
                      className={``}
                    >
                      {item.title}
                    </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <button className="relative flex items-center gap-2">
          <Icon icon="solar:logout-2-bold" className="w-6 h-6" />
          <Link>خروج</Link>
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar