import { useFormik } from "formik";
import * as Yup from "yup";
import { Icon } from "@iconify/react";
import TravelDatePicker from "./DatePicker";
import PassengerSelector from "./PassengerSelector";
import CitySelector from "./CitySelector";
import FrameContainer from "../../../UI/FrameContainer";
import { useState } from "react";

const today = new Date();
today.setHours(0, 0, 0, 0);

const validationSchema = Yup.object().shape({
  origin: Yup.string().required("شهر مبدأ را انتخاب کنید"),
  destination: Yup.string().required("شهر مقصد را انتخاب کنید"),
  departureDate: Yup.date()
    .required("تاریخ رفت را انتخاب کنید")
    .min(today, "تاریخ رفت نمی‌تواند قبل از امروز باشد"),
  returnDate: Yup.date().when("tripType", {
    is: "roundTrip",
    then: (schema) => schema
      .required("تاریخ برگشت را انتخاب کنید")
      .min(Yup.ref("departureDate"), "تاریخ برگشت باید بعد از تاریخ رفت باشد"),
    otherwise: (schema) => schema.nullable()
  }),
  passengers: Yup.object().shape({
    adults: Yup.number()
      .min(1, "حداقل یک بزرگسال باید انتخاب شود")
      .required("تعداد بزرگسالان را انتخاب کنید"),
    children: Yup.number().min(0, "تعداد کودکان نمی‌تواند منفی باشد"),
    infants: Yup.number().min(0, "تعداد نوزادان نمی‌تواند منفی باشد"),
  }),
});



export default function TravelBooking({ formData, onSubmit }) {
  const [activeTab, setActiveTab] = useState("airplane");
  const [tripType, setTripType] = useState("oneWay");
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const formik = useFormik({
    initialValues: {
      origin: formData.origin || '',
      destination: formData.destination || '',
      departureDate: formData.departureDate || null,
      returnDate: formData.returnDate || null,
      passengers: formData.passengers || {
        adults: 1,
        children: 0,
        infants: 0
      },
      tripType: formData.tripType || 'oneWay'
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });
  

  // Progress bar component
  const ProgressBar = ({ currentStep, totalSteps }) => {
  
    return (
      <div className="flex items-center gap-2 w-11/12">
        {[...Array(totalSteps)].map((_, index) => (
          <>
          {index !== 0 && <hr className="w-full" />}
          <div
            key={index}
            className={`min-w-6 min-h-5 rounded-full flex items-center justify-center
            ${
              index + 1 <= currentStep
                ? "bg-clrDarkBrown text-white dark:bg-clrLightGreen"
                : "bg-gray-200 text-gray-400 dark:bg-clrDarkGreen/50 dark:text-clrWhite"
            }`}
          >
            {index + 1}
          </div>
          </>
        ))}
      </div>
    );
  };
  

  // More logical step organization
  const steps = {
    1: (
      // Step 1: Trip Type + Cities
      <div className="flex gap-4 w-11/12">
        <div className="flex items-center justify-center w-full gap-2">
          <CitySelector
            type="origin"
            value={formik.values.origin}
            onChange={(city) => {
              formik.setFieldValue("origin", city);
              onSubmit({ ...formik.values, origin: city });
            }}
            formik={formik}
          />
          <FrameContainer
            backgroundColor={2}
            preferredStyles="duration-200 h-full hover:shadow-[0_0_5px_#dda15e] hover:dark:shadow-[0_0_5px_#41914e]"
          >
            <button className="px-3 rounded bg-white dark:bg-clrDarkGray duration-100 h-full">
              <Icon
                icon="ph:arrows-left-right"
                className="w-4 h-4 text-clrDarkBrown dark:text-clrLightGreen"
              />
            </button>
          </FrameContainer>
          <CitySelector
            type="destination"
            value={formik.values.destination}
            onChange={(city) => {
              formik.setFieldValue("destination", city);
              onSubmit({ ...formik.values, destination: city }); // آپدیت فوری
            }}
            formik={formik}
          />
        </div>
      </div>
    ),
    2: (
      // Step 2: Dates
      <div className="flex gap-2 justify-center w-11/12">
        <FrameContainer backgroundColor={1}>
          <div className="flex items-center p-2 rounded bg-white dark:bg-clrCoal relative min-w-32">
            <div
              className={`absolute w-[49%] h-[calc(100%_-_4px)] top-0.5 right-0.5 rounded border border-clrDarkBrown/20 dark:border-none bg-clrLightBrown/20 dark:bg-clrLightGreen duration-200 ${
                tripType === "roundTrip" && "right-[49%]"
              }`}
            />
            {/* Trip Type Radio Buttons */}
            <button
              className="flex items-center justify-center gap-5 cursor-pointer z-10 h-full w-full"
              onClick={() => {
                setTripType("oneWay");
                formik.setFieldValue("tripType", "oneWay");
              }}
            >
              {/* ... oneWay radio button code ... */}
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  setTripType("oneWay");
                  formik.setFieldValue("tripType", "oneWay");
                }}
              >
                <input
                  type="radio"
                  id="oneWay"
                  name="tripType"
                  checked={tripType === "oneWay"}
                  onChange={() => {
                    setTripType("oneWay");
                    formik.setFieldValue("tripType", "oneWay");
                  }}
                  className="hidden peer"
                />
                <label
                  htmlFor="oneWay"
                  className="text-xs text-clrDarkBrown dark:text-clrWhite cursor-pointer"
                >
                  یک طرفه
                </label>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  setTripType("roundTrip");
                  formik.setFieldValue("tripType", "roundTrip");
                }}
              >
                <input
                  type="radio"
                  id="roundTrip"
                  name="tripType"
                  checked={tripType === "roundTrip"}
                  onChange={() => {
                    setTripType("roundTrip");
                    formik.setFieldValue("tripType", "roundTrip");
                  }}
                  className="hidden peer"
                />
                <label
                  htmlFor="roundTrip"
                  className="text-xs text-clrDarkBrown dark:text-clrWhite cursor-pointer"
                >
                  دو طرفه
                </label>
              </div>
            </button>
          </div>
        </FrameContainer>
        <TravelDatePicker
          label="تاریخ رفت"
          selected={formik.values.departureDate}
          onChange={(date) => formik.setFieldValue("departureDate", date)}
          minDate={new Date()} // فقط یک شی Date ساده
          formik={formik}
          name="departureDate"
        />

        <TravelDatePicker
          label="تاریخ برگشت"
          selected={formik.values.returnDate}
          onChange={(date) => formik.setFieldValue("returnDate", date)}
          minDate={formik.values.departureDate || new Date()} // اگر تاریخ رفت نداشتیم از امروز استفاده کن
          tripType={tripType}
          formik={formik}
          name="returnDate"
        />
      </div>
    ),
    3: (
      // Step 3: Passengers
      <PassengerSelector
        passengers={formik.values.passengers}
        onChange={(passengers) =>
          formik.setFieldValue("passengers", passengers)
        }
        formik={formik}
        name="passengers"
      />
    ),
  };

  const tabs = [
    { id: "airplane", title: "بلیط هواپیما", icon: "ph:airplane-tilt-light" },
    { id: "train", title: "بلیط قطار", icon: "ph:train-light" },
    { id: "bus", title: "بلیط اتوبوس", icon: "ph:bus-light" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic
  };

  return (
    <FrameContainer
      backgroundColor={3}
      preferredStyles="absolute bottom-5 w-9/12 rounded-2xl"
    >
      <div className="flex flex-col w-full gap-5 pt-1 pb-3 rounded-2xl bg-white dark:bg-clrCoal items-center">
        {/* Navigation Tabs */}
        <nav className="flex justify-between gap-2 mt-2.5 w-11/12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-2 py-1 text-sm rounded transition-colors relative ${
                activeTab === tab.id
                  ? "text-clrDarkBrown dark:text-clrLightGreen"
                  : "text-clrDarkGray/80 hover:text-clrDarkBrown/80 dark:text-clrWhite/70 hover:dark:text-clrLightGreen"
              }`}
            >
              <Icon icon={tab.icon} className="w-5 h-5" />
              {tab.title}
            </button>
          ))}
        </nav>

        <div className="w-full mx-auto flex flex-col items-center gap-3">
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-1 w-full items-center ">
            {steps[currentStep]}

            <div className="flex flex-row-reverse self-center justify-between w-11/12 mt-2">
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev + 1)}
                  className="px-3 py-1.5 text-sm font-medium text-white rounded bg-clrDarkBrown dark:bg-clrLightGreen shadow-[0_0_5px_#bc6c2540] hover:shadow-[0_0_5px_#bc6c25] dark:shadow-[0_0_5px_#41914e40] duration-200 hover:dark:shadow-[0_0_5px_#41914e]"
                >
                  مرحله بعد
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className={`px-3 py-1.5 text-sm font-medium text-white rounded ${
                    formik.isValid
                      ? "bg-clrDarkBrown shadow-[0_0_5px_#bc6c2540] hover:shadow-[0_0_5px_#bc6c25] dark:bg-clrLightGreen dark:shadow-[y0_0_5px_#41914e40] duration-200 hover:dark:shadow-[0_0_5px_#41914e]"
                      : "bg-gray-500 cursor-not-allowed"
                  }`}
                >
                  جستجوی بلیط
                </button>
              )}

              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="px-3 py-1.5 text-sm font-medium text-clrDarkBrown dark:text-white rounded bg-gray-100 hover:bg-clrLightBrown/10 dark:bg-clrDarkGray hover:dark:bg-clrDarkGray/90"
                >
                  مرحله قبل
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </FrameContainer>
  );
}