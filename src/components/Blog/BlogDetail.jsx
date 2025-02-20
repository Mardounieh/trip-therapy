import { useParams } from "react-router";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Posts } from "./BlogData";
import { useEffect, useRef, useState } from "react";
import CommentSection from "./commentSection";
import ScrollProgress from "./ScrollProgress";

const BlogDetail = () => {
  const { id } = useParams();
  const post = Posts.find((p) => p.id === parseInt(id));
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(post.likes || 0);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [activeSection, setActiveSection] = useState('section1');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'section1', ref: section1Ref },
        { id: 'section2', ref: section2Ref },
        { id: 'section3', ref: section3Ref }
      ];

      const currentSection = sections.find(section => {
        const element = section.ref.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shareOnTwitter = (title) => {
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${title}&url=${url}`, '_blank');
  };
  
  const shareOnLinkedIn = (title) => {
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };
  
  const copyToClipboard = async (url) => {
    await navigator.clipboard.writeText(url);
  };

  const calculateReadingTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <>
      <ScrollProgress />

      <div className="flex flex-col lg:flex-row gap-6 w-[95%] mt-24 mb-5 mx-auto">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full lg:w-9/12"
        >
          <article className="bg-lightBackground/50 dark:bg-darkBackground/80 p-6 rounded-2xl border border-lightPrimary/50 dark:border-darkPrimary/50 dark:shadow-[0_0_10px_1px_#4199e140]">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              src={post.picture}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-xl mb-8"
            />

            <div className="max-w-3xl mx-auto">
              {/* اطلاعات هدر */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4 text-sm text-lightText/60 dark:text-darkText/60">
                  <div className="flex items-center gap-1">
                    <Icon icon="lucide:calendar" className="w-5 h-5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon icon="lucide:clock" className="w-5 h-5" />
                    <span>زمان مطالعه: {calculateReadingTime(post.description)} دقیقه</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon icon="lucide:eye" className="w-5 h-5" />
                    <span>{post.views}</span>
                  </div>
                </div>

                {/* دکمه‌های تعامل */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className="p-2 rounded-full bg-lightPrimary/10 dark:bg-darkPrimary/10 text-lightPrimary dark:text-darkPrimary"
                  >
                    <Icon
                      icon={isBookmarked ? "ph:bookmark-fill" : "ph:bookmark"}
                      className="w-5 h-5 text-lightPrimary dark:text-darkPrimary"
                    />
                  </button>
                  <button
                    onClick={() => setLikes((prev) => prev + 1)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-lightPrimary/10 dark:bg-darkPrimary/10 text-lightPrimary dark:text-darkPrimary"
                  >
                    <Icon icon="lucide:heart" className="w-5 h-5" />
                    <span>{likes}</span>
                  </button>
                  <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-lightPrimary/10 dark:bg-darkPrimary/10 text-lightPrimary dark:text-darkPrimary">
                    <Icon icon="lucide:hash" className="w-5 h-5" />
                    <span>{post.category}</span>
                  </div>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-lightText dark:text-darkText mb-6">
                {post.title}
              </h1>

              <div className="prose prose-lg dark:prose-invert text-lightText/80 dark:text-darkText/80 max-w-none flex flex-col gap-6">
                <section ref={section1Ref} className="flex flex-col gap-3">
                  <h2 className="text-xl font-bold">مقدمه</h2>
                  <p className="leading-10">
                    React یک کتابخانه‌ی قدرتمند جاوااسکریپت برای ساخت رابط‌های
                    کاربری است که توسط فیسبوک توسعه داده شده است. این کتابخانه
                    به توسعه‌دهندگان اجازه می‌دهد تا کامپوننت‌های قابل استفاده
                    مجدد ایجاد کنند و اپلیکیشن‌های داینامیک و پرسرعت بسازند.
                  </p>
                </section>

                <section ref={section2Ref} className="flex flex-col gap-3">
                  <h2 className="text-xl font-bold">محتوای اصلی</h2>
                  <p className="leading-10">
                    در این بخش، به برخی از ویژگی‌های کلیدی React می‌پردازیم:
                  </p>
                  <ul className="list-disc list-inside leading-10">
                    <li>
                      <strong>کامپوننت‌محوری:</strong> React بر پایه‌ی
                      کامپوننت‌ها ساخته شده است. هر کامپوننت می‌تواند به صورت
                      مستقل توسعه داده شود و در بخش‌های مختلف اپلیکیشن استفاده
                      شود.
                    </li>
                    <li>
                      <strong>مجازی DOM:</strong> React از یک DOM مجازی استفاده
                      می‌کند که بهینه‌سازی‌های زیادی را در رندرینگ و به‌روزرسانی
                      رابط کاربری فراهم می‌کند.
                    </li>
                    <li>
                      <strong>یادگیری آسان:</strong> با وجود قدرت زیاد، React
                      دارای یک منحنی یادگیری نسبتاً ملایم است و مستندات جامعی
                      دارد.
                    </li>
                    <li>
                      <strong>اکوسیستم گسترده:</strong> React دارای یک اکوسیستم
                      بزرگ از کتابخانه‌ها و ابزارهای جانبی است که توسعه‌ی
                      اپلیکیشن‌ها را تسهیل می‌کند.
                    </li>
                  </ul>
                  <p className="leading-10">
                    برای شروع کار با React، می‌توانید از ابزارهایی مانند Create
                    React App استفاده کنید که یک محیط توسعه‌ی آماده برای شما
                    فراهم می‌کند.
                  </p>
                </section>

                <section ref={section3Ref} className="flex flex-col gap-3">
                  <h2 className="text-xl font-bold">نتیجه‌گیری</h2>
                  <p className="leading-10">
                    React یکی از محبوب‌ترین کتابخانه‌های جاوااسکریپت برای ساخت
                    رابط‌های کاربری مدرن است. با استفاده از کامپوننت‌ها و DOM
                    مجازی، توسعه‌دهندگان می‌توانند اپلیکیشن‌های کارآمد و قابل
                    نگهداری ایجاد کنند. اگر به دنبال یادگیری یک فناوری قدرتمند و
                    پرکاربرد هستید، React انتخاب مناسبی است.
                  </p>
                </section>

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-sm text-lightText/60 dark:text-darkText/60">
                    اشتراک‌گذاری:
                  </span>
                  <button
                    onClick={() => shareOnTwitter(post.title)}
                    className="p-2 rounded-full text-lightPrimary dark:text-darkPrimary hover:bg-lightPrimary/20 dark:hover:bg-darkPrimary/20 transition-colors"
                  >
                    <Icon icon="lucide:twitter" className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => shareOnLinkedIn(post.title)}
                    className="p-2 rounded-full text-lightPrimary dark:text-darkPrimary hover:bg-lightPrimary/20 dark:hover:bg-darkPrimary/20 transition-colors"
                  >
                    <Icon icon="lucide:linkedin" className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => copyToClipboard(window.location.href)}
                    className="p-2 rounded-full text-lightPrimary dark:text-darkPrimary hover:bg-lightPrimary/20 dark:hover:bg-darkPrimary/20 transition-colors"
                  >
                    <Icon icon="lucide:link" className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* بخش نظرات */}
              <CommentSection />

            </div>
          </article>
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-3/12 order-first lg:order-last"
        >
          <div className="sticky top-24 space-y-6">
            {/* Table of Contents */}
            <div className="bg-lightBackground/50 dark:bg-darkBackground/80 p-4 rounded-xl border border-lightPrimary/50 dark:border-darkPrimary/50">
              <h3 className="text-lg font-semibold text-lightText dark:text-darkText mb-4">
                فهرست مطالب
              </h3>
              <ul className="space-y-2">
                {[
                  { id: "section1", title: "مقدمه", ref: section1Ref },
                  { id: "section2", title: "محتوای اصلی", ref: section2Ref },
                  { id: "section3", title: "نتیجه‌گیری", ref: section3Ref },
                ].map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.ref)}
                      className={`w-full text-right px-3 py-2 rounded-lg transition-all duration-200
                      ${
                        activeSection === section.id
                          ? "bg-lightPrimary/10 dark:bg-darkPrimary/10 text-lightPrimary dark:text-darkPrimary font-medium"
                          : "text-lightText/70 dark:text-darkText/70 hover:bg-lightPrimary/5 dark:hover:bg-darkPrimary/5"
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Posts - Mobile Optimization */}
            <div className="bg-lightBackground/50 dark:bg-darkBackground/80 p-4 rounded-xl border border-lightPrimary/50 dark:border-darkPrimary/50">
              <h3 className="text-lg font-semibold text-lightText dark:text-darkText mb-4">
                مقالات مرتبط
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                {Posts.slice(0, 3).map((relatedPost, index) => (
                  <div
                    key={index}
                    className="flex gap-2 hover:bg-lightPrimary/5 dark:hover:bg-darkPrimary/5 p-2 rounded-lg transition-colors"
                  >
                    <img
                      src={relatedPost.picture}
                      alt={relatedPost.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex flex-col justify-center">
                      <h4 className="text-sm text-lightText dark:text-darkText font-medium line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-xs text-lightText/60 dark:text-darkText/60 mt-1">
                        {relatedPost.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </>
  );
};

export default BlogDetail;