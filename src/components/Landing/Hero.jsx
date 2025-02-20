import { Link } from "react-router";
import { useTheme } from "../../context/ThemeContext";
import defaultHeroPicture from "../../assets/pictures/nordic.jpg"
import lightDefaultHeroPicture from "../../assets/pictures/light-road.jpg"
import shrine from "../../assets/pictures/shrine.jpg"
import lightShrine from "../../assets/pictures/light-shrine.jpg";
import lightCoast from "../../assets/pictures/light-coast4.jpg"
import coast from "../../assets/pictures/dark-coast.jpg"
import japan from "../../assets/pictures/japan.jpg"
import lightJapan from "../../assets/pictures/light-japan.jpg"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from "react";

const SliderItems = [
  {
    picture: defaultHeroPicture,
    lightPicture: lightDefaultHeroPicture,
    title: "آسایش در هر مسیر، آرامش در هر مقصد",
    description: (
      <p className="text-sm sm:text-base text-center text-clrWhite leading-10">
        <span className="leading-8 block">
          از سواحل نیلگون خلیج فارس تا قله‌های سر به فلک کشیده البرز، ایران
          سرزمین شگفتی‌هاست. با ما به کشف این زیبایی‌ها بیایید.
        </span>
      </p>
    ),
  },
  {
    picture: coast,
    lightPicture: lightCoast,
    title: "همسفر شما در سیاحت",
    description: (
      <p className="text-sm sm:text-base text-center text-clrWhite leading-10">
        <span className="leading-8 block">
          گشت و گذار در زیباترین مناطق گردشگری با بهترین امکانات اقامتی و
          تفریحی. تورهای متنوع داخلی و خارجی با قیمت‌های رقابتی و خدمات ویژه.
        </span>
      </p>
    ),
  },
  {
    picture: shrine,
    lightPicture: lightShrine,
    title: "همسفر شما در زیارت",
    description: (
      <p className="text-sm sm:text-base text-center text-clrWhite leading-10">
        <span className="leading-8 block">
          سفرهای زیارتی با آرامش کامل و برنامه‌ریزی دقیق، همراه با راهنمایان
          مجرب و آشنا به اماکن مقدس. ما افتخار همراهی شما در این سفر معنوی را
          داریم.
        </span>
      </p>
    ),
  },
  {
    picture: japan,
    lightPicture: lightJapan,
    title: "همسفر شما در سرزمین‌های دور",
    description: (
      <p className="text-sm sm:text-base text-center text-clrWhite leading-10">
        <span className="leading-8 block">
          سفر به جذاب‌ترین مقاصد بین‌المللی با پروازهای معتبر، هتل‌های درجه یک و
          تورلیدرهای حرفه‌ای. تجربه سفری بی‌نظیر به دوردست‌ها را با ما آغاز
          کنید.
        </span>
      </p>
    ),
  },
];




const Hero = () => {
  const {darkMode} = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full h-screen -mt-[63px]">
      <Swiper
        direction="vertical"
        draggable
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {SliderItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full z-20 flex items-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${
                  darkMode ? item.picture : item.lightPicture
                })`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: "center",
              }}
            >
              <div className="w-full dark:text-clrWhite flex flex-col items-center justify-center gap-3 md:gap-6 p-4">
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <>
                      <motion.h1
                        key={`title-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl text-orange-500 dark:text-green-400"
                      >
                        {item.title}
                      </motion.h1>

                      <motion.div
                        key={`desc-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="xs:w-10/12 lg:w-7/12 xl:w-5/12"
                      >
                        {item.description}
                      </motion.div>

                      <motion.div
                        key={`button-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <Link
                          to="/auth"
                          className="mt-4 text-sm md:text-base rounded-xl duration-200 text-clrMilk dark:text-clrWhite bg-clrDarkBrown dark:bg-clrLightGreen px-4 py-0.5 md:px-6 md:py-1 hover:dark:shadow-[0_0_10px_0_#41914e] hover:brightness-110"
                        >
                          خرید بلیط
                        </Link>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero
