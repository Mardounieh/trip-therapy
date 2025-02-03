import { useTheme } from '../context/ThemeContext';
import { Icon } from '@iconify/react';
import FrameContainer from './FrameContainer';

function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <FrameContainer backgroundColor={3} preferredStyles="rounded-full">
      <div
        onClick={toggleDarkMode}
        className="relative cursor-pointer w-14 h-7 rounded-full p-1 bg-white dark:bg-clrCoal transition-colors duration-300"
      >
        <div
          className={`absolute w-5 h-5 rounded-full transition-transform duration-300 
        ${darkMode ? "translate-x-0" : "-translate-x-7"}`}
        >
          <Icon
            icon={darkMode ? "f7:moon-stars" : "ph:sun"}
            className={`w-full h-full ${
              darkMode ? "text-clrWhite" : "text-clrLightBrown"
            }`}
          />
        </div>
      </div>
    </FrameContainer>
  );
}

export default ThemeToggle;
