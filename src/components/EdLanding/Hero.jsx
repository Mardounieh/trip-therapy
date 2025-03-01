import { motion } from 'framer-motion'
import DottedBackground from '../../UI/DottedBackground'
import { Icon } from '@iconify/react'
import TypeWriter from '../../UI/CodeWriter'

const code = 
`<div className="w-[60%] flex flex-col justify-center gap-8 pr-8">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
    >
      <h1 className="text-5xl font-bold leading-[65px] text-white">
        یادگیری{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-lPurple to-sky-500">
          برنامه‌نویسی
        </span>
        <br />
        را با ما تجربه کنید
      </h1>
      <p className="text-gray-300 text-lg">
        با بهترین اساتید و پروژه‌های کاربردی، مسیر برنامه‌نویس شدن رو طی کن
      </p>
      <div className="flex gap-4">
        <button className="border text-white border-lPurple/60 px-6 py-1 rounded-full hover:bg-white/5 duration-300">
          مشاهده دوره‌ها
        </button>
        <button className="text-white bg-gradient-to-r from-lPurple to-sky-500 px-6 py-1 rounded-full hover:shadow-[0_0_15px_#9B59B650] hover:brightness-110 duration-300">
          شروع یادگیری
        </button>
    </div>
  </motion.div>
</div>`;

const EdHero = ({ onScrollClick }) => {
  return (
    <section className="relative min-h-screen w-full py-20 flex items-end justify-center grid-pattern">
      <DottedBackground />
      {/* Content Section */}
      <div className="absolute w-full inset-0 backdrop-blur-[5px] bg-black/10 flex flex-col items-center justify-center lg:items-start gap-8 z-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[65vh] flex flex-col gap-5 items-center lg:items-start lg:pr-16"
        >
          <h1 className="w-full xs:w-7/12 text-[clamp(1.5rem,4vw,2.5rem)] font-bold md:leading-[75px] text-white text-center lg:text-start">
            یادگیری {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lPurple to-sky-500">
              برنامه نویسی {""}
            </span>
            به سبک حرفه‌ای‌ها
          </h1>
          <p className="text-gray-300 text-[clamp(1rem,1.5vw,1.5rem)] text-center xl:text-start px-1 text-sm sm:text-base">
            با بهترین و مجرب‌ترین استادان برنامه نویسی رو حرفه‌ای یاد بگیر
          </p>
          <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-4 text-sm md:text-base">
            <button className="border text-white border-lPurple/60 px-6 py-1 rounded-full hover:bg-white/5 duration-300">
              مشاهدهٔ دوره‌‌ها
            </button>
            <button className="text-white bg-gradient-to-r from-lPurple to-sky-500 px-6 py-1 rounded-full hover:shadow-[0_0_15px_#9B59B650] hover:brightness-110 duration-300">
              شروع یادگیری
            </button>
          </div>
        </motion.div>
      </div>

      {/* Code Section - Left Side */}
      <div className="absolute inset-0 w-full hidden lg:flex items-center justify-center">
        <div
          dir="ltr"
          className="w-full h-[65vh] overflow-hidden lg:pl-16 py-6"
        >
          <TypeWriter
            text={code}
            className="font-mono text-[8px] xl:text-[10px] overflow-x-auto"
          />
        </div>
      </div>
      <button onClick={onScrollClick} className='relative z-50 bg-clrCoal p-2 border border-white/20 rounded-full'>
        <div className='w-full h-full absolute inset-0 rounded-full border animate-low-ping'/>
        <Icon icon="ph:arrow-down-light" className="w-5 h-5 text-white" />
      </button>
    </section>
  );
}

export default EdHero