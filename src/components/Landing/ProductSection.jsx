import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade"
import 'swiper/css/autoplay';

// Pictures
import socks from "../../assets/pictures/products/socks.png"
import toothbrush from "../../assets/pictures/products/toothbrush.png"
import headphone from "../../assets/pictures/products/headphone.png"
import neckPillow from "../../assets/pictures/products/neck-pillow.png"
import powerBank from "../../assets/pictures/products/powerbank.png"
import shampoo from "../../assets/pictures/products/shampoo.png"
import sleepBlindfold from "../../assets/pictures/products/sleep-blindfold.png"
import suitcase from "../../assets/pictures/products/suitcase.png"

const products = [
  {
    id: 1,
    name: "چمدان",
    description: "سبک و مقاوم",
    image: suitcase,
    category: "essentials",
  },
  {
    id: 4,
    name: "هدفون",
    description: "کیفیت صدای عالی",
    image: headphone,
    category: "comfort",
  },
  {
    id: 5,
    name: "بالش گردنی",
    description: "راحتی در سفر",
    image: neckPillow,
    category: "comfort",
  },
  {
    id: 6,
    name: "چشم بند",
    description: "خواب راحت",
    image: sleepBlindfold,
    category: "comfort",
  },
  {
    id: 7,
    name: "مسواک",
    description: "بهداشت سفر",
    image: toothbrush,
    category: "hygiene",
  },
  {
    id: 8,
    name: "شامپو",
    description: "مراقبت از مو",
    image: shampoo,
    category: "hygiene",
  },
  {
    id: 9,
    name: "پاوربانک",
    description: "شارژ همیشگی",
    image: powerBank,
    category: "essentials",
  },
];

const categories = [
  {
    title: "ضروری",
    id: "essentials",
  },
  {
    title: "راحتی",
    id: "comfort",
  },
  {
    title: "بهداشتی",
    id: "hygiene",
  },
];


const ProductSection = () => {
  return (
    <div className="w-full lg:w-10/12 mx-auto p-4 flex gap-4">
      {categories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.2 }}
          className="flex-1 backdrop-blur-md bg-white/10 rounded-2xl border border-clrDarkBrown/50 dark:border-clrLightGreen/50 overflow-hidden"
        >
          <h3 className="text-xl font-bold text-center p-4 text-clrDarkBrown dark:text-clrLightGreen brightness-125">
            {category.title}
          </h3>
          
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{
              crossFade: true
            }}
            speed={800}
            className="p-4"
          >
            {products
              .filter((product) => product.category === category.id)
              .map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="flex flex-col items-center gap-4 bg-clrCoal/45 p-6 ">
                    <div className="w-44 h-44 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-40 h-40 object-contain bg-transparent"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-lg text-clrDarkBrown dark:text-clrLightGreen brightness-125">{product.name}</h4>
                      <p className="text-sm text-clrWhite">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductSection;