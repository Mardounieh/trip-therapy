import { Link } from "react-router"
import FrameContainer from "../../../UI/FrameContainer"
import airplane from "../../../assets/pictures/airplane2.jpg"
import train from "../../../assets/pictures/train2.jpg"
import bus from "../../../assets/pictures/bus.jpg"
import lightPlane from "../../../assets/pictures/plain-light.jpg"
import lightTrain from "../../../assets/pictures/train-light.jpg"
import lightBus from "../../../assets/pictures/bus-light.jpg"
import { useTheme } from "../../../context/ThemeContext"


const modes = [
  {
    id: "airplane",
    name: "پرواز به مقصد رویاهایتان", // Flight to your dreams
    picture: airplane,
    lightPicture: lightPlane,
    alt: "Traveling by airplane"
  },
  {
    id: "train", 
    name: "همسفر قطار شوید", // Be a train companion
    picture: train,
    lightPicture: lightTrain,
    alt: "Traveling by train"
  },
  {
    id: "bus",
    name: "همراه ما در جاده‌ها", // Join us on the roads
    picture: bus,
    lightPicture: lightBus,
    alt: "Traveling by bus through mountains"
  }
]

const TravelMode = () => {
  const { darkMode } = useTheme()
  return (
    <article className="relative w-full h-full flex flex-col gap-5 items-center pt-16 mb-5">
      <div className="absolute top-16 left-0 w-1/2 h-1/2 bg-clrGreen/20 dark:bg-clrGreen/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-16 right-0 w-1/2 h-1/2 bg-clrLightBrown/50 dark:bg-clrBlue/20 blur-3xl animate-pulse" />
      <h1 className="mb-5 text-xl text-clrDarkBrown dark:text-clrLightGreen font-bold">همسفرتان کدام است؟</h1>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {modes.map((mode) => {
          return (
            <FrameContainer
              backgroundColor={1}
              key={mode.id}
              preferredStyles="hover:dark:shadow-[0_0_20px_#41914e] duration-500 w-fit group"
            >
              <Link to={`${mode.id}`} className="flex flex-col rounded bg-clrCoal relative overflow-hidden">
                <div className="w-[300px] xs:w-[350px] h-[400px]">
                  <img
                    src={darkMode ? mode.picture : mode.lightPicture}
                    alt={mode.alt}
                    className="rounded w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-center text-lg backdrop-brightness-[25%] rounded p-2 absolute w-full h-full duration-500 top-full group-hover:top-0 text-clrWhite">
                    <span className="">{mode.name}</span>
                  </div>
                </div>
              </Link>
            </FrameContainer>
          );
        })}
      </div>
    </article>
  );
}

export default TravelMode
