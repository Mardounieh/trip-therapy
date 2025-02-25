import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useLocation } from "react-router";
import { useTheme } from "../../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const NavigationItems = [
  { title: "خانه", path: "/" },
  { title: "دوره‌ها", path: "/courses" },
  { title: "بلاگ", path: "/blog" },
  { title: "پشتیبانی", path: "/support" },
  { title: "دربارهٔ ما", path: "/about" },
];

const EdHeader = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        key={location.pathname}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed z-50 w-[96%] md:w-3/4 lg:w-2/3 xl:w-1/2 flex items-center justify-between bg-white/5 px-4 py-2 m-3 rounded-full border backdrop-blur-sm border-lPurple/60 shadow-lg shadow-lPurple/15"
      >
        <Link
          to="/"
          className="flex items-center gap-2 px-2"
        >
          <Icon icon="lineicons:vs-code" className="w-5 h-5 text-lPurple" />
          <span className="text-white font-bold">کد کده</span>
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="menu-button sm:hidden bg-lPurple p-1 rounded-full cursor-pointer hover:shadow-[0_0_15px_#9B59B650] hover:brightness-110 duration-150 order-1 sm:order-2"
        >
          <Icon
            icon={isMenuOpen ? "uil:times" : "uil:bars"}
            className="w-5 h-5 text-white"
          />
        </button>

        <nav className="hidden sm:block">
          <ul className="flex items-center gap-5 text-white">
            {NavigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="hover:text-lPurple transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <Icon
            icon="ph:magnifying-glass-light"
            className="w-5 h-5 text-white cursor-pointer"
          />
          <Icon
            onClick={toggleDarkMode}
            icon={darkMode ? "ph:moon-stars-light" : "ph:sun-light"}
            className={`${
              darkMode ? "text-white" : "text-amber-500"
            } w-5 h-5 cursor-pointer`}
          />
          <Link
            to="auth"
            className="text-white bg-gradient-to-r from-lPurple to-sky-500 px-4 py-1 rounded-full hover:shadow-[0_0_15px_#9B59B650] hover:brightness-110 duration-150"
          >
            ورود | ثبت نام
          </Link>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu w-[96%] fixed top-[11%] right-[2%] z-50 sm:hidden rounded-2xl backdrop-blur-md bg-white/10 dark:bg-black/15 border border-lPurple/60 p-4 flex flex-col gap-5"
          >
            <nav className="grid grid-cols-1 xs:grid-cols-2 gap-4">
              {NavigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-lPurple text-center py-2 border-b border-lPurple/20"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <div className="flex items-center gap-3">
                <Icon
                  icon="ph:magnifying-glass-light"
                  className="w-5 h-5 text-white cursor-pointer"
                />
                <Icon
                  onClick={toggleDarkMode}
                  icon={darkMode ? "ph:moon-stars-light" : "ph:sun-light"}
                  className={`${
                    darkMode ? "text-white" : "text-amber-500"
                  } w-5 h-5 cursor-pointer`}
                />
              </div>
              <Link
                to="auth"
                onClick={() => setIsMenuOpen(false)}
                className="text-white bg-gradient-to-r from-lPurple to-sky-500 px-4 py-0.5 rounded-full hover:shadow-[0_0_15px_#9B59B650] hover:brightness-110 duration-150"
              >
                ورود | ثبت نام
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EdHeader;
