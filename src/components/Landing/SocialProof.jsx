import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import social from "../../assets/pictures/social-proof.jpg";
import socialLight from "../../assets/pictures/social-proof-light.jpg";
import { useTheme } from "../../context/ThemeContext";

const testimonials = [
  { id: 1, name: "علی محمدی", tour: "سفر به کویر مرنجاب", text: "خیلی باحال بود، حسابی خوش گذشت." },
  { id: 2, name: "مریم حسینی", tour: "تور جنگل‌های شمال", text: "عجب سفری بود! صد در صد بازم میرم." },
  { id: 3, name: "رضا کریمی", tour: "گشت تاریخی اصفهان", text: "همه چی عالی بود، خیلی چسبید بهمون." },
  { id: 4, name: "سارا تهرانی", tour: "تور ساحلی قشم", text: "دمشون گرم، عجب تور باحالی بود." },
  { id: 5, name: "امیر رضایی", tour: "صعود به سبلان", text: "لیدرمون خیلی هوامونو داشت، عالی بود!" },
  { id: 6, name: "نیلوفر صادقی", tour: "تور غارنوردی علیصدر", text: "کلی کیف کردم! فوق‌العاده بود." },
  { id: 7, name: "حسین پناهی", tour: "تور جزیره هرمز", text: "رنگای ساحل محشر بود! عکسای خفنی گرفتیم." },
  { id: 8, name: "زهرا محبی", tour: "تور ماسال", text: "بهترین سفر عمرم بود! ویوی جنگل از ییلاق عالی بود." },
  { id: 9, name: "محمد سعیدی", tour: "تور کویر شهداد", text: "شبای کویر یه چیز دیگست! ستاره بارون بود آسمون." },
  { id: 10, name: "فاطمه نوری", tour: "تور غار کتله خور", text: "اصلا فکر نمیکردم انقدر هیجان‌انگیز باشه!" },
  { id: 11, name: "پویا رستمی", tour: "تور جنگل ابر", text: "راه سخت بود ولی ارزشش رو داشت. منظره‌هاش توپ بود!" },
  { id: 12, name: "مینا کاظمی", tour: "تور روستای ماسوله", text: "غذاهای محلی خوشمزه، مردم مهربون، همه چی عالی." }
];

const InfiniteSlider = ({ reverse = false, items }) => {
  return (
    <div className="w-full overflow-hidden flex px-5">
      <motion.div
        className="flex gap-6"
        animate={{ 
          x: reverse ? ["50%", "0%"] : ["0%", "50%"]
        }}        
        transition={{
          x: {
            duration: 50,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div 
            key={`${item.id}-${index}`} 
            className="w-[300px] xs:w-[450px] bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <Icon icon="ph:user-circle" className="w-12 h-12 text-clrDarkBrown dark:text-clrLightGreen" />
              <div>
                <h3 className="text-white font-bold">{item.name}</h3>
                <p className="text-white/80 text-sm">{item.tour}</p>
              </div>
            </div>
            <p className="text-white/90 leading-7">{item.text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const SocialProof = () => {
  const { darkMode } = useTheme();

  // Split testimonials into two equal parts
  const firstRow = testimonials.slice(0, 6);
  const secondRow = testimonials.slice(6, 12);

  return (
    <motion.section
      initial={{ scale: 0.95, y: 10, opacity: 0.5 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${
          darkMode ? social : socialLight
        })`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-full h-screen flex items-center justify-center"
    >
      <div className="w-full h-full backdrop-blur-sm flex flex-col items-center justify-end md:gap-6 pb-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 dark:text-green-400 mb-4">
            صدای پای خاطره‌ها
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-clrWhite max-w-2xl mx-auto leading-8">
            اینجا قلب تجربه‌های ناب سفر می‌تپد. لبخندها، هیجان‌ها و لحظه‌های
            جادویی که مسافران ما در قاب خاطراتشان ثبت کرده‌اند
          </p>
        </motion.div>

        {/* Testimonial rows */}
        <InfiniteSlider items={firstRow} reverse={false} />
        <InfiniteSlider items={secondRow} reverse={true} />
      </div>
    </motion.section>
  );
};

export default SocialProof;