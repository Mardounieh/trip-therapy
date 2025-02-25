import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'دوره React.js',
      description: 'یادگیری React.js از پایه تا پیشرفته',
      icon: 'logos:react',
      link: '#',
    },
    {
      id: 2,
      title: 'دوره Node.js',
      description: 'ساخت API با Node.js و Express',
      icon: 'logos:nodejs',
      link: '#',
    },
    {
      id: 3,
      title: 'دوره Python',
      description: 'برنامه‌نویسی پایتون برای مبتدیان',
      icon: 'logos:python',
      link: '#',
    },
    {
      id: 4,
      title: 'دوره JavaScript',
      description: 'یادگیری JavaScript از صفر تا صد',
      icon: 'logos:javascript',
      link: '#',
    },
    {
      id: 5,
      title: 'دوره JavaScript',
      description: 'یادگیری JavaScript از صفر تا صد',
      icon: 'logos:javascript',
      link: '#',
    },
    {
      id: 6,
      title: 'دوره JavaScript',
      description: 'یادگیری JavaScript از صفر تا صد',
      icon: 'logos:javascript',
      link: '#',
    },
    {
      id: 7,
      title: 'دوره JavaScript',
      description: 'یادگیری JavaScript از صفر تا صد',
      icon: 'logos:javascript',
      link: '#',
    },
    {
      id: 8,
      title: 'دوره JavaScript',
      description: 'یادگیری JavaScript از صفر تا صد',
      icon: 'logos:javascript',
      link: '#',
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black backdrop-blur-[5px] flex flex-col items-center justify-center gap-10 overflow-hidden">
      <div className='absolute inset-0 w-full h-full -z-10 bg-gradient-to-br from-sky-700/10 via-transparent to-lPurple/10'>
        <div className='absolute top-1/3 left-1/2 w-1/3 h-1/2 bg-gradient-to-br from-sky-700/30 to-purple-700/30 blur-3xl rounded-full animate-float' />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white">
            نمونه دوره‌های ما
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            بهترین دوره‌ها برای یادگیری برنامه‌نویسی
          </p>
        </motion.div>

        {/* Courses List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 z-50">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-black rounded-xl backdrop-blur p-6 hover:shadow-[0_0_15px_#9B59B650] duration-150"
            >
              <div className="text-center">
                <Icon icon={course.icon} className="w-12 h-12 mx-auto text-lPurple" />
                <h3 className="text-xl font-bold text-white mt-4">{course.title}</h3>
                <p className="text-gray-300 mt-2">{course.description}</p>
                <a
                  href={course.link}
                  className="mt-4 inline-block text-white bg-gradient-to-r from-lPurple to-sky-500 px-5 py-1 rounded-full hover:shadow-[0_0_15px_#9B59B650] hover:brightness-110 duration-300"
                >
                  مشاهده دوره
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;