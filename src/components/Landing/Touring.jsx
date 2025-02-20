import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import tour from "../../assets/pictures/desert.jpg"
import tourLight from "../../assets/pictures/desert-light.jpg"
import { useTheme } from "../../context/ThemeContext";

const Touring = () => {
  const { darkMode } = useTheme()

  return (
    <motion.section
      initial={{ scale: 0.95, y: 10, opacity: 0.5 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${
          darkMode ? tour : tourLight
        })`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: "center",
      }}
      className="w-full h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* ستون سمت راست */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl font-bold text-orange-500 dark:text-green-400">
              سفر به دل کویر
            </h2>
            <p className="text-lg text-clrWhite leading-8">
              تجربه هیجان‌انگیز کویرنوردی با امکانات کامل و راهنمایان حرفه‌ای
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-clrMilk">
                <Icon
                  icon="ph:check-circle"
                  className="w-6 h-6 text-clrLightBrown dark:text-clrLightGreen"
                />
                <span>تجهیزات پیشرفته کویرنوردی</span>
              </div>
              <div className="flex items-center gap-3 text-clrMilk">
                <Icon
                  icon="ph:check-circle"
                  className="w-6 h-6 text-clrLightBrown dark:text-clrLightGreen"
                />
                <span>راهنمایان مجرب و آشنا به مسیر</span>
              </div>
              <div className="flex items-center gap-3 text-clrMilk">
                <Icon
                  icon="ph:check-circle"
                  className="w-6 h-6 text-clrLightBrown dark:text-clrLightGreen"
                />
                <span>پشتیبانی ۲۴ ساعته در طول سفر</span>
              </div>
            </div>
          </motion.div>

          {/* ستون سمت چپ */}
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-2xl"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/5 backdrop-blur border border-clrDarkBrown dark:border-clrLightGreen/30 rounded-xl">
                <Icon
                  icon="ph:compass"
                  className="w-8 h-8 mx-auto text-orange-400 dark:text-clrLightGreen"
                />
                <h3 className="text-xl font-bold text-clrMilk mt-2">۵۰+</h3>
                <p className="text-sm text-clrMilk/80">مسیر ماجراجویی</p>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur border border-clrDarkBrown dark:border-clrLightGreen/30 rounded-xl">
                <Icon
                  icon="ph:users-three"
                  className="w-8 h-8 mx-auto text-orange-400 dark:text-clrLightGreen"
                />
                <h3 className="text-xl font-bold text-clrMilk mt-2">۱۰۰۰+</h3>
                <p className="text-sm text-clrMilk/80">گردشگر راضی</p>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur border border-clrDarkBrown dark:border-clrLightGreen/30 rounded-xl">
                <Icon
                  icon="ph:map-pin"
                  className="w-8 h-8 mx-auto text-orange-400 dark:text-clrLightGreen"
                />
                <h3 className="text-xl font-bold text-clrMilk mt-2">۲۰+</h3>
                <p className="text-sm text-clrMilk/80">مقصد منحصربفرد</p>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur border border-clrDarkBrown dark:border-clrLightGreen/30 rounded-xl">
                <Icon
                  icon="ph:star"
                  className="w-8 h-8 mx-auto text-orange-400 dark:text-clrLightGreen"
                />
                <h3 className="text-xl font-bold text-clrMilk mt-2">۵.۰</h3>
                <p className="text-sm text-clrMilk/80">امتیاز خدمات</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Touring