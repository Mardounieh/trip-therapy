import { useTheme } from "../../context/ThemeContext"
import { Link, useLocation } from "react-router"
import { Icon } from "@iconify/react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const NavigationItem = [
  {
    title: "خانه",
    link: "/"
  },
  {
    title: "تور",
    link: "/"
  },
  {
    title: "توشه",
    link: "/"
  },
  {
    title: "دربارهٔ ما",
    link: "/"
  },
  {
    title: "پشتیبانی",
    link: "/"
  },
]

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme()
  const [isMobileNav, setIsMobileNav] = useState(false)
  const location = useLocation()

  return (
    <>
      <motion.header
        key={location.pathname}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-4 py-2 px-3 md:px-5 mt-4 md:py-0 w-11/12 rounded-full lg:w-8/12 z-50 flex items-center justify-between text-sm backdrop-blur-md bg-white/5 border border-clrDarkBrown dark:border-clrLightGreen"
      >
        <button
          onClick={() => setIsMobileNav(!isMobileNav)}
          className="md:hidden bg-clrDarkBrown dark:bg-clrLightGreen p-1 rounded-full"
        >
          <Icon
            icon={isMobileNav ? "uil:times" : "uil:bars"}
            className="w-5 h-5 text-clrMilk dark:text-clrWhite"
          />
        </button>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-1 text-clrDarkBrown brightness-125 dark:text-clrLightGreen lg:text-lg font-bold"
          >
            Trip Therapy
          </Link>
        </div>

        {/* Desktop Navigation Bar*/}
        <nav className="hidden md:flex items-center gap-1 w-1/2 brightness-125">
          {NavigationItem.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="w-full py-3 border-b border-transparent hover:border-clrDarkBrown hover:dark:border-clrLightGreen text-center text-clrMilk dark:text-clrLightGreen duration-200"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={toggleDarkMode}>
            <Icon
              icon={`${darkMode ? "f7:moon-stars" : "ph:sun"}`}
              className="w-5 h-5 text-clrMilk dark:text-clrWhite"
            />
          </button>
          <Link
            to="/auth"
            className="bg-clrDarkBrown dark:bg-clrLightGreen rounded-xl px-4 py-1 text-clrMilk dark:text-clrWhite hover:dark:shadow-[0_0_10px_#41914e] hover:brightness-110 duration-200"
          >
            ورود | عضویت
          </Link>
        </div>
      </motion.header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileNav && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-11/12 fixed top-[5.5%] right-[4%] left-2 z-50 md:hidden rounded-2xl backdrop-blur-md bg-clrDarkGray/45 border border-clrDarkBrown dark:border-clrLightGreen p-4"
          >
            <nav className="flex flex-col gap-4">
              {NavigationItem.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  onClick={() => setIsMobileNav(false)}
                  className="text-clrDarkBrown dark:text-clrLightGreen text-center py-2 border-b border-clrDarkBrown/20 dark:border-clrLightGreen/20"
                >
                  {item.title}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4">
                <button onClick={toggleDarkMode} className="p-2">
                  <Icon
                    icon={`${darkMode ? "f7:moon-stars" : "ph:sun"}`}
                    className="w-5 h-5 text-clrDarkBrown dark:text-clrWhite"
                  />
                </button>
                <Link
                  to="/auth"
                  onClick={() => setIsMobileNav(false)}
                  className="bg-clrDarkBrown dark:bg-clrLightGreen rounded-xl px-4 py-1 text-clrMilk dark:text-clrWhite hover:dark:shadow-[0_0_10px_#41914e] hover:brightness-110 duration-200"
                >
                  ورود | عضویت
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
