import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { useTheme } from "../../context/ThemeContext";

const NavigationItems = [
  {
    link: "/",
    title: "خانه"
  },
  {
    link: "/",
    title: "دوره‌ها"
  },
  {
    link: "/blog",
    title: "بلاگ"
  },
  {
    link: "/",
    title: "دربارهٔ ما"
  },
  {
    link: "/",
    title: "پشتیبانی"
  },
]

const BlogHeader = () => {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <motion.header
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-3 w-11/12 sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12  backdrop-blur-sm
      bg-lightBackground/20 dark:bg-darkBackground/20
      text-lightText dark:text-darkText 
      rounded-3xl px-3 py-2 z-50 border border-lightPrimary/30 dark:border-darkPrimary/30"
    >
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/blog"
          className="flex items-center gap-2 text-lightSecondary dark:text-darkSecondary hover:drop-shadow-[0_0_1px_green] duration-200"
        >
          <Icon icon="lucide:code" className="text-xl" />
          <span className="font-medium">DevBlog</span>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-6">
          {NavigationItems.map((item, index) => (
            <li key={index}>
              <motion.a
                href={item.link}
                className="hover:text-lightPrimary dark:hover:text-darkPrimary transition-colors duration-300 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.title}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <motion.button
            className="p-2 rounded-lg"
          >
            <Icon icon="lucide:search" className="text-lg" />
          </motion.button>

          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg"
          >
            <Icon icon="lucide:sun" className="text-lg hidden dark:block" />
            <Icon icon="lucide:moon" className="text-lg block dark:hidden" />
          </motion.button>

          <div className="relative flex items-center group">
            {/* Glow Layer */}
            <div className="absolute w-full h-full bg-gradient-to-r from-lightPrimary/50 to-lightSecondary/50 dark:from-darkPrimary/50 dark:to-darkSecondary/50 blur-[4px] group-hover:dark:blur-[8px] group-hover:dark:scale-110 rounded-2xl -z-10 duration-200" />

            {/* Main Button */}
            <motion.button
              className="w-full text-sm bg-gradient-to-r from-lightPrimary to-lightSecondary dark:from-darkPrimary dark:to-darkSecondary px-4 py-2 rounded-2xl text-white hover:brightness-125 duration-200"
            >
              ورود | ثبت نام
            </motion.button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default BlogHeader