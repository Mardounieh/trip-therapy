import { useRef } from "react"
import EdHero from "./Hero"
import RoadmapSlider from "./RoadmapSlider"
import Courses from "./Courses"

const EdLanding = () => {
  const roadmapRef = useRef(null)

  const handleScrollToRoadmap = () => {
    const element = roadmapRef.current;
    const elementPosition = element.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const duration = 1000; // Adjust this value to control speed (in milliseconds)
    
    let startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, elementPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    // Easing function for smooth acceleration and deceleration
    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  };

  return (
    <main className="">
      <EdHero onScrollClick={handleScrollToRoadmap} />
      <RoadmapSlider ref={roadmapRef} />
      <Courses />
    </main>
  )
}

export default EdLanding