import { Children } from "react"

const FrameContainer = ({ children, preferredStyles, backgroundColor }) => {
  const backgroundColors = [
    "bg-gradient-to-tl from-clrGreen/60 via-clrGreen/10 to-clrGreen/60 shadow-[0_0_5px_#606c3840]",
    "bg-gradient-to-bl from-clrGreen/30 via-clrGreen/10 to-clrGreen/30 shadow-[0_0_5px_#606c3840]",
    "bg-gradient-to-tl from-clrLightGreen/80 via-clrGreen/10 to-clrLightGreen/80 shadow-[0_0_5px_#606c3840]"
  ]
  
  return (
    <div className={`inline-flex p-px rounded ${preferredStyles} ${backgroundColors[backgroundColor - 1]}`}>
      {children}
    </div>
  );
}

export default FrameContainer