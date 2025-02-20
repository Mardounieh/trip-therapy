import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Link } from "react-router";
import { Posts } from "./BlogData";

const SidebarItems = [
  {
    title: "دسته‌بندی‌ها",
    items: ["همه", "فرانت‌اند", "بک‌اند", "دیزاین", "دوره‌ها"]
  },
  {
    title: "نویسندگان برتر",
    items: ["علی محمدی", "سارا احمدی", "رضا کریمی"]
  },
  {
    title: "برچسب‌های محبوب",
    items: ["React", "Next.js", "TailwindCSS", "JavaScript", "TypeScript"]
  }
];

const MainBlogList = () => {
  return (
    <main className="w-[95%] mt-24 flex flex-col lg:flex-row justify-between gap-6 pb-8">
      {/* Posts Section */}
      <article className="w-full lg:w-9/12">
        <motion.div
          className="grid gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {Posts.map((post, index) => (
            <Link
              to={`/blog/${post.id}`}
              key={index}
              className="group bg-lightBackground/50 dark:bg-darkBackground p-4 rounded-2xl border border-lightPrimary/20 dark:border-darkPrimary/20 hover:border-lightPrimary/40 dark:hover:border-darkPrimary/40 transition-all duration-300
                hover:shadow-[0_0_15px_rgba(65,153,225,0.1)] dark:hover:shadow-[0_0_20px_rgba(65,153,225,0.15)]
                group relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-lightPrimary/5 to-lightSecondary/5 dark:from-darkPrimary/5 dark:to-darkSecondary/5" />
              </div>

              <div className="flex flex-col md:flex-row gap-4 h-full relative z-10">
                <div className="w-full md:w-[320px] h-[180px] flex-shrink-0">
                  <img
                    src={post.picture}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-xl aspect-video"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between min-h-[180px]">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-lightText dark:text-darkText">
                      {post.title}
                    </h3>
                    <p className="text-sm text-lightText/70 dark:text-darkText/70">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3">
                    <div className="flex items-center gap-4 text-xs text-lightText/60 dark:text-darkText/60">
                      <div className="flex items-center gap-1">
                        <Icon icon="lucide:calendar" className="w-4 h-4" />
                        <span className="mt-1">{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon icon="lucide:clock" className="w-4 h-4" />
                        <span className="mt-1">{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon icon="lucide:eye" className="w-4 h-4" />
                        <span className="mt-1">{post.views}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-lightPrimary/10 dark:bg-darkPrimary/10 text-lightPrimary dark:text-darkPrimary">
                      <Icon icon="lucide:hash" className="w-4 h-4" />
                      <span className="mt-1">{post.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </article>

      {/* Sidebar */}
      <aside className="w-full lg:w-3/12">
        <motion.div
          className="sticky top-24 space-y-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {SidebarItems.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-lightBackground/50 dark:bg-darkBackground duration-300 p-4 rounded-2xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Icon
                  icon="lucide:list"
                  className="w-5 h-5 text-lightPrimary dark:text-darkPrimary"
                />
                <h4 className="text-lightText dark:text-darkText font-medium">
                  {section.title}
                </h4>
              </div>
              <hr className="border-lightPrimary/20 dark:border-darkPrimary/20 mb-4" />
              <div className="flex flex-wrap gap-2 md:grid md:grid-cols-2 lg:flex lg:flex-wrap">
                {section.items.map((item, idx) => (
                  <motion.button
                    key={idx}
                    className="w-full md:w-auto text-sm px-3 py-1 rounded-full bg-lightPrimary/10 dark:bg-darkPrimary/10 text-lightPrimary dark:text-darkPrimary hover:bg-lightPrimary/20 dark:hover:bg-darkPrimary/20 transition-all dark:hover:shadow-[0_0_10px_#4199e160]"
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </aside>
    </main>
  );
};

export default MainBlogList;
