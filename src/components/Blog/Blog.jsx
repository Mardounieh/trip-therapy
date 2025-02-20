import { motion } from "framer-motion"
import MainBlogList from "./MainBlogList"
import bgLight from "../../assets/pictures/blog/code-light2.jpg"
import bgDark from "../../assets/pictures/blog/code-dark.jpg"

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-screen relative"
    >
      {/* Background Images */}
      <div className="fixed inset-0 z-0">
        <img 
          src={bgLight} 
          alt="background"
          className="w-full h-full object-cover dark:hidden block"
        />
        <img 
          src={bgDark} 
          alt="background" 
          className="w-full h-full object-cover dark:block hidden hue-rotate-[100deg]"
        />
        <div className="absolute inset-0 backdrop-blur-[2px] bg-lightBackground/50 dark:bg-darkBackground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <MainBlogList />
      </div>
    </motion.div>
  );
}

export default Blog
