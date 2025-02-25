import { Outlet } from "react-router"
import { AnimatePresence, motion } from 'framer-motion'
import EdHeader from "../components/EdLanding/Header"

const EdContainer = () => {
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  }

  return (
    <div className="flex flex-col items-center relative min-h-screen bg-white dark:bg-clrCoal">
      <div className="fixed -left-44 w-[500px] h-[500px] rotate-[30deg] bg-purple-700/20 shadow-[0_0_100px_#3b0864] blur-3xl animate-custom-pulse" />
      <div className="fixed -bottom-28 -right-36 w-[500px] h-[500px] rotate-[30deg] bg-sky-700/20 shadow-[0_0_100px_#082f49] blur-3xl animate-custom-pulse" />
      <EdHeader />
      <AnimatePresence mode="wait">
        <motion.main
          {...pageTransition}
          className="w-full flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </div>
  )
}

export default EdContainer
