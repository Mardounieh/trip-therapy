import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import DottedBackground from '../../UI/DottedBackground';

import teachers from "../../assets/pictures/teachers.webp"
import certificate from "../../assets/pictures/certificate.jpg"
import support from "../../assets/pictures/customer-support-team.jpg"
import dashboardPic from "../../assets/pictures/dashboard.png"

const features = [
  {
    icon: "ph:headset-light",
    title: "پشتیبانی 24/7",
    description: "دوستان ما در تیم پشتیبانی مشتاق راهنمایی و خدمت رسانی به شما هستند.",
    gradient: "from-purple-500 to-sky-500 backdrop-blur",
    pic: support
  },
  {
    icon: "ph:code-light",
    title: "یادگیری پروژه‌محور",
    description: "با کار بر روی پروژه‌های چالش برانگیز و واقعی مهارت‌های خود را  افزایش دهید و مهارت حل مسئله را عمیق درک کنید.",
    gradient: "from-sky-500 to-emerald-500 backdrop-blur",
    pic: dashboardPic
  },
  {
    icon: "ph:rocket-launch-light",
    title: "مدارک معتبر",
    description: "پس از شرکت در آزمون پایانی هر دوره مدرک معتبر بین‌المللی خود را دریافت کنید.",
    gradient: "from-indigo-500 to-purple-500 backdrop-blur",
    pic: certificate
  },
  {
    icon: "ph:users-light",
    title: "استادان مجرب",
    description: "استادان مجرب و  ما با صبر و حوصله همه چیز رو براتون توضیح میدن و در مسیر یادگیری همراهتون هستن.",
    gradient: "from-rose-500 to-amber-500 backdrop-blur",
    pic: teachers
  }
];

const WhyUs = () => {
  return (
    <section className="relative bg-black/50 w-full min-h-screen flex flex-col items-center justify-center gap-10 grid-pattern-no-mask overflow-hidden">
      <DottedBackground />
      <motion.svg
        className="absolute bottom-0 left-0 w-full blur-3xl"
        viewBox="0 0 1440 320"
        initial={{ y: 30 }}
        animate={{ y: [30, 0, 30] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <path
          fill="url(#gradient)"
          d="M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,170.7C672,171,768,149,864,133.3C960,117,1056,107,1152,122.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L0,320Z"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#9B59B610", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#0ea5e910", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </motion.svg>

      <div className="absolute w-screen h-screen blur-3xl">
        <div className="wave absolute bottom-0 left-0" />
      </div>
      <div className="relative z-40 flex flex-col items-center gap-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-lPurple to-sky-500 mx-2">
            چرا ما؟
          </h2>

          <p className="text-gray-300 text-[clamp(1rem,1.5vw,1.2rem)] max-w-2xl">
            با بیش از 5 سال تجربه در آموزش برنامه‌نویسی، بهترین مسیر یادگیری را
            برای شما فراهم کرده‌ایم
          </p>
        </motion.div>
      </div>

        <div className="w-3/4 h-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div
                className="bg-[#141414] border border-white/10 rounded-xl p-6
              hover:shadow-[0_0_15px_#9B59B630] transition-all duration-300
              hover:border-lPurple/30 relative"
              >
                {/* Background image container */}
                <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden">
                  <img
                    src={feature.pic}
                    alt={feature.icon}
                    className="w-full h-full object-cover brightness-[40%]
                  [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.5)_0%,transparent_70%)]"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} 
                  flex items-center justify-center mb-4`}
                  >
                    <Icon icon={feature.icon} className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-500 to-lPurple brightness-150 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
    </section>
  );
};

export default WhyUs;