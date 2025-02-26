import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import DottedBackground from '../../UI/DottedBackground'
import { Icon } from '@iconify/react'

const codeStyles = `
  code {
    color: #fff;  /* رنگ پیش‌فرض برای متن داخل تگ‌ها */
  }

  .token.tag,
  .token.keyword {
    color: #9B59B6;
  }
  
  .token.attr-name {
    color: #0ea5e9;
  }
  
  .token.attr-value,
  .token.string {
    color: #34d399;
  }
  
  .token.punctuation {
    color: #6272A4;
  }
  
  .token.operator {
    color: #9B59B6;
  }
  
  .token.function {
    color: #50FA7B;
  }
  
  .token.comment {
    color: #6272A4;
  }
`

const TypeWriter = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1);

    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    Prism.highlightAll();
  }, [displayedText]);

  return (
    <>
      <style>{codeStyles}</style>
      <pre className={`${className} bg-transparent`}>
        <code className="language-jsx">{displayedText}</code>
      </pre>
    </>
  );
};

const ContentTypeWriter = ({ text, className, speed = 150, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('')
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index))
          index++
        } else {
          clearInterval(interval)
        }
      }, speed)
      
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, speed, delay])

  return (
    <span className={className}>{displayedText}</span>
  )
}


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
      <div className="absolute w-full inset-0 py-10 backdrop-blur-[5px] bg-black/10 flex flex-col sm:items-center sm:justify-center lg:items-start lg:justify-start gap-8 lg:pr-8 z-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 mt-24 sm:mt-0 lg:mt-20 px-16"
        >
          <h1 className="text-[clamp(2rem,4vw,2.5rem)] font-bold md:leading-[65px] text-white text-center lg:text-start">
            یادگیری {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lPurple to-sky-500">
              برنامه نویسی
            </span>
            <br />
            به سبک حرفه‌ای‌ها
          </h1>
          <p className="text-gray-300 text-[clamp(1rem,1.5vw,1.5rem)] text-center xl:text-start px-1">
            با بهترین و مجرب‌ترین استادان برنامه نویسی رو حرفه‌ای یاد بگیر
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
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
      <div className="hidden lg:block absolute top-44 xl:top-24 left-12 w-full">
        <div
          dir="ltr"
          className="w-full h-[75vh] rounded-xl p-4 overflow-hidden"
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