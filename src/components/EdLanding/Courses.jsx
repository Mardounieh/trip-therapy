import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import DottedBackground from '../../UI/DottedBackground';

const courses = [
  { id: 1, title: 'دوره React.js', description: 'یادگیری React.js از پایه تا پیشرفته همراه با پروژه‌های عملی', icon: 'logos:react', link: '#', price: '1,200,000 تومان', rating: 4.8, tags: ['فرانت‌اند', 'React.js'], image: 'path/to/react-image.jpg' },
  { id: 2, title: 'دوره Node.js', description: 'ساخت API و برنامه‌های سمت سرور با Node.js و Express', icon: 'logos:nodejs', link: '#', price: '1,000,000 تومان', rating: 4.7, tags: ['بک‌اند', 'Node.js'], image: 'path/to/node-image.jpg' },
];

const CourseCard = ({ course }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative bg-black/50 ring-1 ring-lPurple/40 rounded-xl backdrop-blur overflow-hidden hover:shadow-[0_0_15px_#9B59B650] duration-150"
    >
      <div className="absolute inset-0 w-full h-1/3">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover brightness-[40%] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.8)_0%,transparent_100%)]"
        />
      </div>
      <div className="relative p-4 mt-[30%]">
        <div className="flex items-center gap-2">
          <Icon icon={course.icon} className="w-6 h-6 text-lPurple" />
          <h3 className="text-xl font-bold text-white">{course.title}</h3>
        </div>
        <p className="text-gray-300 mt-2">{course.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-white text-lg font-bold">{course.price}</span>
          <span className="text-yellow-400 text-sm">⭐ {course.rating}</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {course.tags.map((tag, index) => (
            <span key={index} className="bg-lPurple/20 text-lPurple text-xs px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <a
          href={course.link}
          className="mt-4 inline-block text-white bg-gradient-to-r from-lPurple to-sky-500 px-6 py-1 rounded-full hover:shadow-[0_0_15px_#9B59B650] hover:brightness-110 duration-300"
        >
          ثبت نام
        </a>
      </div>
    </motion.div>
  );
};

const Courses = () => {
  return (
    <section className="relative w-full min-h-screen py-16 bg-black/70 backdrop-blur-[1px] flex flex-col items-center justify-center gap-10 overflow-hidden">
      <DottedBackground />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-50">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
