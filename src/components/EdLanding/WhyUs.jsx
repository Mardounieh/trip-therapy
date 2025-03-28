import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import DottedBackground from '../../UI/DottedBackground';

import teachers from "../../assets/pictures/teachers.webp"
import certificate from "../../assets/pictures/certificate.jpg"
import support from "../../assets/pictures/customer-support-team.jpg"
import dashboardPic from "../../assets/pictures/dashboard.png"

const TiltCard = ({ image, icon, title, description, preferredGradient }) => {
  const handleMouse = (event) => {
    const { currentTarget, clientX, clientY } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    // Calculate center point
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate rotation based on distance from center
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Add easing factor to make edges smoother
    const rotateX = deltaY * -0.05;
    const rotateY = deltaX * 0.05;

    // Apply smooth transition with easing
    currentTarget.style.transition = 'transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)';
    currentTarget.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale(1.02)
    `;
  };

  const handleMouseLeave = (event) => {
    const { currentTarget } = event;
    currentTarget.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  const handleMouseEnter = (event) => {
    const { currentTarget } = event;
    currentTarget.style.transition = 'transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)';
  };

  return (
    <motion.div 
      className="relative min-h-56 w-full h-full rounded-lg overflow-hidden bg-clrCoal border border-lPurple/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <img
        src={image}
        alt={`${title} picture`}
        className="absolute w-full h-full object-cover brightness-75 [mask:linear-gradient(to_bottom,black_1%,transparent)]"
      />
      <div className={`absolute top-5 right-5 p-3 rounded-lg bg-gradient-to-bl ${preferredGradient}`}>
        <Icon icon={icon} className="w-5 h-5 text-white" />
      </div>
      <div className="absolute bottom-0 w-full h-32 p-5 bg-gradient-to-t from-black/50 flex flex-col gap-2 justify-center">
        <h3 className={`text-transparent font-bold text-lg bg-clip-text bg-gradient-to-r ${preferredGradient}`}>
          {title}
        </h3>
        <p className="text-gray-300 text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const WhyUs = () => {
  return (
    <section className="bg-black w-full min-h-screen flex flex-col items-center justify-center gap-5 py-16 relative overflow-hidden">
      <DottedBackground />
      <div className="absolute inset-0 grid-pattern-reverse" />
      {/* title */}
      <div className="w-11/12 md:w-1/2 flex flex-col items-center gap-2 z-10">
        <h2 className="text-white text-2xl font-bold">چرا ما؟</h2>
        <div className="w-1/2 h-1 bg-gradient-to-r from-sky-500 to-lPurple skew-x-[45deg]" />
      </div>
      {/* cards */}
      <div className="relative w-11/12 lg:w-9/12 min-h-screen md:h-[80vh] grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 p-10">
        <TiltCard
          image={certificate}
          icon="ph:rocket-launch-light"
          title="مدارک معتبر"
          description="پس از شرکت در آزمون پایانی هر دوره مدرک معتبر بین‌المللی خود را دریافت کنید."
          preferredGradient="from-sky-300 to-sky-500"
        />

        <TiltCard
          image={teachers}
          icon="ph:users-light"
          title="استادان مجرب"
          description="استادان مجرب و ما با صبر و حوصله همه چیز رو براتون توضیح میدن و در مسیر یادگیری همراهتون هستن."
          preferredGradient="from-sky-400 to-emerald-500"
        />

        <TiltCard
          image={support}
          icon="ph:headset-light"
          title="پشتیبانی 24/7"
          description="دوستان ما در تیم پشتیبانی مشتاق راهنمایی و خدمت رسانی به شما هستند."
          preferredGradient="from-pink-500 to-purple-600"
        />

        <TiltCard
          image={dashboardPic}
          icon="ph:code-light"
          title="یادگیری پروژه‌محور"
          description="با کار بر روی پروژه‌های چالش برانگیز و واقعی مهارت‌های خود را افزایش دهید و مهارت حل مسئله را عمیق درک کنید."
          preferredGradient="from-red-400 to-orange-500"
        />
      </div>
    </section>
  );
}

export default WhyUs;
