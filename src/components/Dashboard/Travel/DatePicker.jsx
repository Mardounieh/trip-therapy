import { useState } from "react";
import { Icon } from "@iconify/react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import './TravelDatePicker.css'
import FrameContainer from "../../../UI/FrameContainer";

const maxDate = new Date();
maxDate.setMonth(maxDate.getMonth() + 6);

const convertPersianToEnglish = (str) => {
  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return str.replace(/[۰-۹]/g, d => persianNumbers.indexOf(d));
};

export default function TravelDatePicker({ label, selected, onChange, minDate, tripType, formik, name }) {
  const [value, setValue] = useState(selected);

  const convertToGregorian = (date) => {
    if (!date) return null;
    const gregorianDate = date.convert(gregorian).format("YYYY-MM-DD");
    return convertPersianToEnglish(gregorianDate);
  };

  // تبدیل minDate به شی تاریخ مناسب
  const getMinDate = () => {
    if (!minDate) return new Date();
    return new Date(minDate);
  };

  return (
    <FrameContainer backgroundColor={1} preferredStyles="w-full">
      <div
        className={`${
          tripType !== "roundTrip" &&
          label === "تاریخ برگشت" &&
          "grayscale pointer-events-none"
        } relative flex items-center gap-1 p-2 rounded bg-white dark:bg-clrDarkGray w-full`}
      >
        <Icon icon="uiw:date" className="w-4 h-4 text-clrDarkBrown dark:text-clrGreen" />
        <div className="flex flex-col pr-3 mr-2 border-r border-clrDarkBrown dark:border-clrGreen/80">
          <label className="text-[10px] text-clrDarkGray dark:text-clrWhite/50">{label}</label>
          <DatePicker
            value={value}
            onChange={(date) => {
              setValue(date);
              const gregorianDate = convertToGregorian(date);
              onChange(gregorianDate);
            }}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            minDate={getMinDate()}
            maxDate={maxDate}
            inputClass="text-sm bg-transparent outline-none text-clrDarkBrown dark:text-clrLightGreen dark:caret-clrLightGreen w-full"
            containerClassName="w-full"
            placeholder="انتخاب تاریخ"
          />
        </div>

        {formik.touched[name] && formik.errors[name] && (
          <div className="absolute -bottom-6 text-red-500 text-xs mt-1">{formik.errors[name]}</div>
        )}
      </div>
    </FrameContainer>
  );
}
