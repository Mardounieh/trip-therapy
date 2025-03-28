import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import DottedBackground from '../../UI/DottedBackground';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="w-full bg-black backdrop-blur rounded-lg overflow-hidden hover:brightness-125 ring-1 ring-sky-500/40 p-2 duration-150 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-indigo-900/30 to-indigo-800/5">
      <DottedBackground dots={15} />
      </div>
      <button
        className="w-full p-3 flex items-center justify-between text-white"
      >
        <span className="text-right">{question}</span>
        <Icon
          icon="ph:caret-up"
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-3 text-sm text-gray-300">{answer}</div>
        </div>
      </div>
    </motion.div>
  );
};

const FAQ = () => {
  const questions = [
    {
      question: "چطور می‌تونم در دوره‌ها ثبت‌نام کنم؟",
      answer: "شما می‌تونید با ایجاد حساب کاربری و پرداخت شهریه، به راحتی در دوره‌های ما ثبت‌نام کنید."
    },
    {
      question: "آیا دوره‌ها گواهینامه معتبر دارند؟",
      answer: "بله، پس از اتمام موفقیت‌آمیز هر دوره، گواهینامه معتبر بین‌المللی دریافت خواهید کرد."
    },
    {
      question: "دسترسی به دوره‌ها تا چه مدت است؟",
      answer: "شما دسترسی مادام‌العمر به تمام دوره‌هایی که خریداری کرده‌اید خواهید داشت."
    },
    {
      question: "آیا امکان پرداخت اقساطی وجود دارد؟",
      answer: "بله، ما گزینه‌های پرداخت اقساطی متنوعی برای دانشجویان عزیز در نظر گرفته‌ایم."
    }
  ];

  return (
    <section className="relative bg-black w-full min-h-screen flex flex-col items-center justify-center gap-8 py-16">
      <div className="absolute inset-0  grid-pattern-reverse" />
      <DottedBackground />
      <div className="w-11/12 md:w-1/2 flex flex-col items-center gap-2">
        <h2 className="text-white text-2xl font-bold">سوالات متداول</h2>
        <div className="w-1/2 h-1 bg-gradient-to-r from-sky-500 to-purple-500 skew-x-[45deg]" />
      </div>

      <div className="w-11/12 md:w-2/3 flex flex-col gap-4">
        {questions.map((q, index) => (
          <FAQItem key={index} question={q.question} answer={q.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;