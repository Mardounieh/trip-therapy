import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

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

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 10, opacity: 0.5 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative w-full bg-clrMilk dark:bg-clrCoal"
    >
      {/* Clip path section */}
      <div
        className="absolute top-0 left-0 w-full h-56 bg-gradient-to-b dark:from-clrLightGreen/40 dark:via-clrGreen/20 dark:to-clrDarkGreen/20 from-clrDarkBrown to-clrLightBrown"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 70% 80%, 30% 100%, 0 85%)",
        }}
      />

      {/* Main footer content */}
      <div className="bg-clrCoal/10 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-clrDarkBrown dark:text-clrLightGreen">Trip Therapy</h3>
              <p className="text-clrMilk/80 leading-7">
                همراه شما در سفرهای به‌یادماندنی، از کویر تا دریا، از جنگل تا
                کوهستان
              </p>
              <div className="flex gap-4">
                <Icon
                  icon="ph:instagram-logo"
                  className="w-6 h-6 text-clrLightGreen cursor-pointer hover:text-clrLightBrown transition-colors"
                />
                <Icon
                  icon="ph:telegram-logo"
                  className="w-6 h-6 text-clrLightGreen cursor-pointer hover:text-clrLightBrown transition-colors"
                />
                <Icon
                  icon="ph:whatsapp-logo"
                  className="w-6 h-6 text-clrLightGreen cursor-pointer hover:text-clrLightBrown transition-colors"
                />
              </div>
            </div>

            {/* Navigation section */}
            <div>
              <h4 className="text-xl font-bold text-clrWhite mb-6">
                دسترسی سریع
              </h4>
              <ul className="space-y-3">
                {NavigationItem.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.link}
                      className="text-clrMilk/80 hover:text-clrLightGreen transition-colors"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact section */}
            <div>
              <h4 className="text-xl font-bold text-clrWhite mb-6">
                ارتباط با ما
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-clrMilk/80">
                  <Icon
                    icon="ph:phone"
                    className="w-5 h-5 text-clrLightGreen"
                  />
                  <span>۰۹۱۲۳۴۵۶۷۸۹</span>
                </div>
                <div className="flex items-center gap-3 text-clrMilk/80">
                  <Icon
                    icon="ph:envelope"
                    className="w-5 h-5 text-clrLightGreen"
                  />
                  <span>info@triptherapy.ir</span>
                </div>
                <div className="flex items-center gap-3 text-clrMilk/80">
                  <Icon
                    icon="ph:map-pin"
                    className="w-5 h-5 text-clrLightGreen"
                  />
                  <span>کرج، میدان والفجر</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-clrWhite/10 text-center text-clrMilk/60">
            <p>تمامی حقوق برای تریپ تراپی محفوظ است © ۱۴۰۲</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer