import { motion } from "framer-motion";
import { Link } from "react-router";
import { Icon } from "@iconify/react";
import FooterBackground from "../../UI/FooterBackground";

const Footer = () => {
  const footerLinks = [
    {
      title: "دسترسی سریع",
      items: [
        { name: "خانه", path: "/" },
        { name: "دوره‌ها", path: "/courses" },
        { name: "بلاگ", path: "/blog" },
        { name: "پشتیبانی", path: "/support" },
      ],
    },
    {
      title: "ارتباط با ما",
      items: [
        { name: "درباره ما", path: "/about" },
        { name: "تماس با ما", path: "/contact" },
        { name: "همکاری با ما", path: "/cooperation" },
        { name: "حریم خصوصی", path: "/privacy" },
      ],
    },
  ];

  const socialLinks = [
    { icon: "mdi:instagram", url: "#", color: "hover:text-rose-500" },
    { icon: "mdi:telegram", url: "#", color: "hover:text-blue-500" },
    { icon: "mdi:youtube", url: "#", color: "hover:text-red-500" },
    { icon: "mdi:linkedin", url: "#", color: "hover:text-blue-600" },
  ];

  return (
    <footer className="w-full h-[50vh] relative bg-black">
      <FooterBackground />
      <div className="absolute inset-0 flex flex-col items-center justify-between p-8 z-50 backdrop-blur-[10px] grid-pattern-no-mask">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-start gap-8"
        >
          {/* لوگو و توضیحات */}
          <div className="flex flex-col gap-4 md:w-1/3">
            <Link to="/" className="flex items-center gap-2">
              <Icon icon="lineicons:vs-code" className="w-6 h-6 text-lPurple" />
              <span className="text-white font-bold text-xl">کد کده</span>
            </Link>
            <p className="text-gray-300 text-sm leading-7">
              کد کده، پلتفرم آموزش برنامه‌نویسی با هدف ارائه با کیفیت‌ترین دوره‌های آموزشی. ما به شما کمک می‌کنیم تا مسیر یادگیری را سریع‌تر و اصولی‌تر طی کنید.
            </p>
          </div>

          {/* لینک‌های فوتر */}
          {footerLinks.map((section, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="text-white font-bold">{section.title}</h3>
              <ul className="flex flex-col gap-2">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <Link 
                      to={item.path}
                      className="text-gray-300 hover:text-lPurple transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* بخش پایینی */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/40 pt-4"
        >
          <p className="text-gray-400 text-sm">
            تمامی حقوق برای کد کده محفوظ است &copy; {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-300 ${social.color} transition-colors`}
              >
                <Icon icon={social.icon} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;