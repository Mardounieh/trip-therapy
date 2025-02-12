import { Outlet } from "react-router"
import { AnimatePresence, motion } from 'framer-motion'
import Header from "../components/Landing/Header"
import Footer from "../components/Landing/Footer"

const Container = () => {
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  }

  return (
    <div className="flex flex-col items-center relative min-h-screen bg-clrMilk dark:bg-clrCoal brightness-[110%]">
        <Header />
      
      <AnimatePresence mode="wait">
        <motion.main
          {...pageTransition}
          className="w-full flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default Container
