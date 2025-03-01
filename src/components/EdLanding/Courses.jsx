import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import DottedBackground from '../../UI/DottedBackground';
import reactPic from "../../assets/pictures/react.jpg";
import nodePic from "../../assets/pictures/node.webp";
import tailwindPic from "../../assets/pictures/tailwind.jpg";
import nextjsPic from "../../assets/pictures/next.jpeg";
import htmlCssPic from "../../assets/pictures/html css.jpg";

const courses = [
  {
    id: 1,
    title: "دوره React.js",
    instructor: "محمد رضایی",
    description: "یادگیری React.js از پایه تا پیشرفته همراه با پروژه‌های عملی",
    icon: "logos:react",
    link: "#",
    price: "1,200,000 تومان",
    rating: 4.8,
    reviews: 230,
    tags: ["فرانت‌اند", "React.js"],
    image: reactPic,
    alt: "React.js course picture"
  },
  {
    id: 2,
    title: "دوره Node.js",
    instructor: "علی محمدی",
    description: "ساخت API و برنامه‌های سمت سرور با Node.js و Express",
    icon: "logos:nodejs",
    link: "#",
    price: "1,000,000 تومان",
    rating: 4.7,
    reviews: 180,
    tags: ["بک‌اند", "Node.js"],
    image: nodePic,
    alt: "Node.js course picture"
  },
  {
    id: 3,
    title: "دوره Tailwind CSS",
    instructor: "سارا احمدی",
    description: "یادگیری طراحی رابط کاربری مدرن با استفاده از Tailwind CSS",
    icon: "logos:tailwindcss-icon",
    link: "#",
    price: "700,000 تومان",
    rating: 4.9,
    reviews: 150,
    tags: ["فرانت‌اند", "Tailwind CSS"],
    image: tailwindPic,
    alt: "Tailwind CSS course picture"
  },
  {
    id: 4,
    title: "دوره Next.js",
    instructor: "رضا اکبری",
    description: "آموزش توسعه وب با Next.js و SSR",
    icon: "logos:nextjs-icon",
    link: "#",
    price: "1,300,000 تومان",
    rating: 4.6,
    reviews: 140,
    tags: ["فرانت‌اند", "Next.js"],
    image: nextjsPic,
    alt: "Next.js course picture"
  },
  {
    id: 5,
    title: "دوره HTML & CSS",
    instructor: "مینا ناصری",
    description: "یادگیری اصول طراحی وب با HTML و CSS از پایه",
    icon: "logos:html-5",
    link: "#",
    price: "600,000 تومان",
    rating: 4.8,
    reviews: 200,
    tags: ["فرانت‌اند", "HTML & CSS"],
    image: htmlCssPic,
    alt: "HTML & CSS course picture"
  }
];

const CourseCard = ({ course }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col gap-2 bg-black/50 ring-1 ring-lPurple/40 rounded-xl backdrop-blur overflow-hidden hover:shadow-[0_0_15px_#9B59B650] duration-150"
    >
      <div className="w-full h-[50%]">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full aspect-video object-cover [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.9)_0%,transparent_100%)]"
        />
      </div>

      <div className="flex-1 flex flex-col gap-5 p-4 justify-end">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <Icon icon={course.icon} className="w-6 h-6 text-lPurple" />
            <h3 className="text-xl font-bold text-white">{course.title}</h3>
          </div>
          <span className="text-sm text-gray-400">
            استاد: {course.instructor}
          </span>
          <p className="text-gray-300">{course.description}</p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <span className="text-white text-lg font-bold">{course.price}</span>
            <span className="text-yellow-400 text-sm">
              ⭐ {course.rating} ({course.reviews})
            </span>
          </div>
          <div className='flex flex-col gap-4'>
            <div className="flex flex-wrap gap-2">
              {course.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-lPurple/20 text-lPurple text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={course.link}
              className="text-white text-center bg-gradient-to-r from-lPurple to-sky-500 px-6 py-1 rounded-full hover:shadow-[0_0_15px_#9B59B650] hover:brightness-110 duration-300"
            >
              ثبت نام
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


const Courses = () => {
  return (
    <section className="relative w-full min-h-screen py-16 bg-black/70 backdrop-blur-[1px] flex flex-col items-center justify-center gap-10 overflow-hidden">
      <DottedBackground />
      <div className='text-white text-2xl lg:text-3xl font-bold'>
        <h2>نمونه دوره‌های ما</h2>
        <div className="h-1 w-2/6 md:w-4/6 skew-x-12 bg-gradient-to-r from-lPurple to-sky-500 mx-auto mt-4" />
      </div>
      <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 z-50">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
