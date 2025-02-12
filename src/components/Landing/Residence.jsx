import { Icon } from "@iconify/react";
import darkRoom from "../../assets/pictures/emerald-room3.jpg"
import lightRoom from "../../assets/pictures/khaki-room.jpg"
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const Residence = () => {
  const { darkMode } = useTheme()

  return (
    <motion.section
      initial={{ scale: 0.95, y: 10, opacity: 0.5 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${
          darkMode ? darkRoom : lightRoom
        })`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: "center",
      }}
      className="w-full h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 dark:text-green-400"
          >
            اقامتی در خور شأن شما
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="block text-sm md:text-base lg:text-lg text-clrWhite max-w-2xl leading-10"
          >
            <span className="block leading-10">
              در هتل‌های منتخب ما، آسایش و آرامش شما تضمین شده است. از اتاق‌های
              لوکس با چشم‌اندازهای بی‌نظیر تا خدمات ۲۴ ساعته، همه چیز برای
              اقامتی دلپذیر مهیاست.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mt-4"
          >
            <motion.div
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(8px)" }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 min-w-40 bg-white/15 px-6 py-3 rounded-lg text-clrMilk dark:text-emerald-400"
            >
              <div>
                <span className="block text-2xl font-bold">۱۰۰+</span>
                <span className="text-sm">هتل منتخب</span>
              </div>
              <Icon icon="ph:building-light" className="w-9 h-9" />
            </motion.div>

            <motion.div
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(8px)" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-between gap-4 min-w-40 bg-white/15 px-6 py-3 rounded-lg text-clrMilk dark:text-emerald-400"
            >
              <div>
                <span className="block text-2xl font-bold">۲۴/۷</span>
                <span className="text-sm">پشتیبانی</span>
              </div>
              <Icon icon="ph:headset-light" className="w-9 h-9" />
            </motion.div>

            <motion.div
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(8px)" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-4 min-w-40 bg-white/15 px-6 py-3 rounded-lg text-clrMilk dark:text-emerald-400"
            >
              <div>
                <span className="block text-2xl font-bold">۵۰۰۰+</span>
                <span className="text-sm">مسافر راضی</span>
              </div>
              <Icon icon="ph:smiley-light" className="w-10 h-10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}


export default Residence;