import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { forwardRef } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import RoadmapFlow from './Roadmap';
import DottedBackground from '../../UI/DottedBackground';

const Roadmaps = [
  [
    {
      id: "1",
      type: "custom",
      position: { x: 100, y: 120 },
      data: {
        label: "HTML & CSS",
        description: "پایه‌های وب",
        duration: "4 هفته",
        icon: "logos:html-5",
      },
    },
    {
      id: "2",
      type: "custom",
      position: { x: 400, y: 200 },
      data: {
        label: "JavaScript",
        description: "برنامه‌نویسی وب",
        duration: "8 هفته",
        icon: "vscode-icons:file-type-js-official",
      },
    },
    {
      id: "3",
      type: "custom",
      position: { x: 700, y: 120 },
      data: {
        label: "React.js",
        description: "کتابخانه فرانت‌اند",
        duration: "12 هفته",
        icon: "devicon:react-wordmark",
      },
    },
    {
      id: "4",
      type: "custom",
      position: { x: 1000, y: 200 },
      data: {
        label: "Next.js",
        description: "فریم‌ورک React",
        duration: "6 هفته",
        icon: "devicon:nextjs",
      },
    },
  ],
  [
    {
      id: "1",
      type: "custom",
      position: { x: 100, y: 200 },
      data: {
        label: "Python",
        description: "برنامه‌نویسی پایتون",
        duration: "8 هفته",
        icon: "logos:python",
      },
    },
    {
      id: "2",
      type: "custom",
      position: { x: 400, y: 120 },
      data: {
        label: "Django",
        description: "فریم‌ورک پایتون",
        duration: "10 هفته",
        icon: "vscode-icons:file-type-django",
      },
    },
    {
      id: "3",
      type: "custom",
      position: { x: 700, y: 200 },
      data: {
        label: "PostgreSQL",
        description: "پایگاه داده",
        duration: "6 هفته",
        icon: "logos:postgresql",
      },
    },
    {
      id: "4",
      type: "custom",
      position: { x: 1000, y: 120 },
      data: {
        label: "Redis",
        description: "پایگاه داده در حافظه",
        duration: "4 هفته",
        icon: "logos:redis",
      },
    },
  ],
  [
    {
      id: "1",
      type: "custom",
      position: { x: 100, y: 120 },
      data: {
        label: "Node.js",
        description: "برنامه‌نویسی سمت سرور",
        duration: "8 هفته",
        icon: "logos:nodejs",
      },
    },
    {
      id: "2",
      type: "custom",
      position: { x: 400, y: 200 },
      data: {
        label: "Express.js",
        description: "فریم‌ورک Node.js",
        duration: "6 هفته",
        icon: "simple-icons:express",
      },
    },
    {
      id: "3",
      type: "custom",
      position: { x: 700, y: 120 },
      data: {
        label: "MongoDB",
        description: "پایگاه داده NoSQL",
        duration: "4 هفته",
        icon: "vscode-icons:file-type-mongo",
      },
    },
    {
      id: "4",
      type: "custom",
      position: { x: 1000, y: 200 },
      data: {
        label: "GraphQL",
        description: "زبان پرس‌وجو API",
        duration: "4 هفته",
        icon: "logos:graphql",
      },
    },
  ],
  [
    {
      id: "1",
      type: "custom",
      position: { x: 100, y: 200 },
      data: {
        label: "Flutter",
        description: "توسعه اپلیکیشن موبایل",
        duration: "12 هفته",
        icon: "logos:flutter",
      },
    },
    {
      id: "2",
      type: "custom",
      position: { x: 400, y: 120 },
      data: {
        label: "Dart",
        description: "زبان برنامه‌نویسی Flutter",
        duration: "6 هفته",
        icon: "logos:dart",
      },
    },
    {
      id: "3",
      type: "custom",
      position: { x: 700, y: 200 },
      data: {
        label: "Firebase",
        description: "پلتفرم توسعه اپلیکیشن",
        duration: "4 هفته",
        icon: "logos:firebase",
      },
    },
    {
      id: "4",
      type: "custom",
      position: { x: 1000, y: 120 },
      data: {
        label: "GetX",
        description: "مدیریت state در Flutter",
        duration: "3 هفته",
        icon: "simple-icons:getx",
      },
    },
  ],
];

const RoadmapSlider = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="w-full h-screen">
      <DottedBackground />
      <Swiper
        direction="vertical"
        draggable
        loop={true}
        speed={500}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        className="mySwiper"
      >
        {Roadmaps.map((roadmap, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-screen h-screen transition-all duration-500 ease-in-out">
              <RoadmapFlow roadmap={roadmap} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
});

export default RoadmapSlider;
