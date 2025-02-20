import { useTheme } from "../../context/ThemeContext";

const NavigationItems = [
  { path: "/", title: "خانه" },
  { path: "/", title: "فروشگاه" },
  { path: "/", title: "درباره ما" },
  { path: "/", title: "پشتیبانی" },
  { path: "/", title: "ارتباط با ما" },
];

const ContactUs = () => {
  const { toggleDarkMode, darkMode } = useTheme();

  return (
    <div className="relative w-full min-h-screen">
    </div>
  );
};

export default ContactUs;