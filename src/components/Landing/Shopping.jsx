import emeraldShopping from '../../assets/pictures/emerald-shopping.jpg'
import khakiShopping from "../../assets/pictures/khaki-shopping.jpg"
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useTheme } from '../../context/ThemeContext'

const Shopping = () => {
  const { darkMode } = useTheme()

  return (
    <motion.section
      initial={{ scale: 0.95, y: 10, opacity: 0.5 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${
          darkMode ? emeraldShopping : khakiShopping
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
            همه‌چیز برای سفری بی‌دغدغه
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="block text-sm md:text-base lg:text-lg text-clrWhite max-w-2xl leading-10"
          >
            <span className="block leading-10">
              با خرید از فروشگاه ما، تجهیزات ضروری سفرتان را با بهترین کیفیت و
              قیمت تهیه کنید. ارسال سریع به تمام نقاط کشور.
            </span>
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-4 mt-4">
            <motion.div
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(8px)" }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 min-w-40 bg-white/15 px-6 py-3 rounded-lg text-clrMilk dark:text-emerald-400"
            >
              <div>
                <span className="block text-2xl font-bold">چمدان</span>
                <span className="text-sm">سبک و مقاوم</span>
              </div>
              <img
                src="/path-to-suitcase-image"
                alt="چمدان مسافرتی"
                className="w-16 h-16 object-cover rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(8px)" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-between gap-4 min-w-40 bg-white/15 px-6 py-3 rounded-lg text-clrMilk dark:text-emerald-400"
            >
              <div>
                <span className="block text-2xl font-bold">خوراکی</span>
                <span className="text-sm">تنقلات سفر</span>
              </div>
              <img
                src="/path-to-snacks-image"
                alt="تنقلات سفر"
                className="w-16 h-16 object-cover rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(8px)" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-4 min-w-40 bg-white/15 px-6 py-3 rounded-lg text-clrMilk dark:text-emerald-400"
            >
              <div>
                <span className="block text-2xl font-bold">دارو</span>
                <span className="text-sm">کیف لوازم پزشکی</span>
              </div>
              <img
                src="/path-to-medical-kit-image"
                alt="کیف لوازم پزشکی"
                className="w-16 h-16 object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}


export default Shopping