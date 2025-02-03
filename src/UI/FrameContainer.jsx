import { Children } from "react"

import { useTheme } from "../context/ThemeContext";

const FrameContainer = ({ children, preferredStyles, backgroundColor }) => {
  const { darkMode } = useTheme();

  
  const backgroundColors = darkMode ? [
    "bg-gradient-to-tl from-clrGreen/60 via-clrGreen/10 to-clrGreen/60 shadow-[0_0_5px_#41914e40]",
    "bg-gradient-to-bl from-clrGreen/30 via-clrGreen/10 to-clrGreen/30 shadow-[0_0_5px_#41914e40]",
    "bg-gradient-to-tl from-clrLightGreen/50 via-clrGreen/10 to-clrLightGreen shadow-[2px_2px_6px_#41914e50]",
  ] : [
    "bg-gradient-to-tl from-clrLightBrown/60 via-clrDarkBrown/10 to-clrLightBrown/60 shadow-[0_0_5px_#dda15e40]",
    "bg-gradient-to-bl from-clrLightBrown/30 via-clrDarkBrown/10 to-clrLightBrown/30 shadow-[0_0_5px_#dda15e40]",
    "bg-gradient-to-tl from-clrLightBrown/80 via-clrDarkBrown/10 to-clrLightBrown/80 shadow-[0_0_5px_#dda15e40]",
  ]
  
  return (
    <div className={`inline-flex p-px rounded ${preferredStyles} ${backgroundColors[backgroundColor - 1]}`}>
      {children}
    </div>
  );
}

export default FrameContainer