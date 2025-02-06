import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import FrameContainer from "../../../UI/FrameContainer";

export default function CitySelector({ type, value, onChange, formik }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(value || "");

  useEffect(() => {
    setSearchTerm(value || "");
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".city-selector")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const cities = [
    "تهران",
    "مشهد",
    "اصفهان",
    "شیراز",
    "تبریز",
    "کرج",
    "اراک",
    "کیش",
    "قشم",
    "سنندج",
    "فزوین",
    "قم",
    "رشت",
  ];

  return (
    <div className="relative city-selector w-full">
      <FrameContainer backgroundColor={1} preferredStyles="w-full">
        <div className="flex items-center gap-2 p-2 rounded bg-white dark:bg-clrDarkGray w-full">
          <Icon
            icon="hugeicons:location-08"
            className="w-5 h-5 text-clrDarkBrown dark:text-clrGreen"
          />
          <div className="flex flex-col pr-3 border-r border-clrLightBrown dark:border-clrGreen">
            <label className="text-[11px] text-clrDarkGray/80 dark:text-clrWhite/50">
              {type === "origin" ? "شهر مبدأ" : "شهر مقصد"}
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsOpen(true)}
              className="text-sm bg-transparent outline-none text-clrDarkBrown caret-clrLightBrown dark:text-clrLightGreen dark:caret-clrLightGreen"
              placeholder="انتخاب شهر"
            />
          </div>
        </div>
      </FrameContainer>

      {/* Display validation error */}
      {formik.touched[type] && formik.errors[type] && (
        <div className="absolute right-0 -bottom-6 text-red-500 text-xs mt-1">{formik.errors[type]}</div>
      )}

      {/* City dropdown */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bottom-16 overflow-auto rounded shadow-lg max-h-60 bg-white dark:bg-clrDarkGray">
          {cities
            .filter((city) => city.includes(searchTerm))
            .map((city) => (
              <button
                key={city}
                className="w-full px-4 py-2 text-sm text-right text-clrDarkBrown dark:text-clrWhite hover:bg-clrLightBrown/40 hover:dark:bg-clrDarkGreen/40"
                onClick={() => {
                  onChange(city);
                  setSearchTerm(city);
                  setIsOpen(false);
                }}
              >
                {city}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}