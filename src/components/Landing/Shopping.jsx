import emeraldShopping from '../../assets/pictures/emerald-shopping.jpg'
import khakiShopping from "../../assets/pictures/khaki-shopping.jpg"
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import ProductSection from './ProductSection'

const Shopping = () => {
  const { darkMode } = useTheme()

  return (
    <motion.section
      initial={{ scale: 0.95, y: 10, opacity: 0.5 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${
          darkMode ? emeraldShopping : khakiShopping
        })`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: "center",
      }}
      className="w-full h-screen flex items-center justify-center"
    >
      <div className="flex flex-col justify-end w-full h-full px-4">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 dark:text-green-400"
          >
            همه‌چیز برای سفری بی‌دغدغه
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-1 block text-sm md:text-base lg:text-lg text-clrWhite max-w-2xl md:leading-8"
          >
            <span className="block leading-10">
              با خرید از فروشگاه ما، تجهیزات ضروری سفرتان را با بهترین کیفیت و
              قیمت تهیه کنید. ارسال سریع به تمام نقاط کشور.
            </span>
          </motion.p>
          <ProductSection />
        </div>
      </div>
    </motion.section>
  );
}


export default Shopping