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



export default function TravelBooking({ formData, onSubmit, modeId }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
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

  const tabs = [
    { id: "airplane", title: "بلیط هواپیما", icon: "ph:airplane-tilt-light" },
    { id: "train", title: "بلیط قطار", icon: "ph:train-light" },
    { id: "bus", title: "بلیط اتوبوس", icon: "ph:bus-light" },
  ];

  return (
    <FrameContainer
      backgroundColor={3}
      preferredStyles={`${
        isBookingOpen ? "top-1/3 md:top-auto md:bottom-10" : "top-[85%] md:top-auto md:bottom-10"
      } duration-500 absolute w-[95%] md:w-11/12 h-[70%] md:h-auto min-h-52 rounded-2xl shadow-[0_20px_50px_1px_#41914e30]`}
    >
      {/* Travel booking open and close button */}
      <FrameContainer
        backgroundColor={1}
        preferredStyles="md:hidden absolute -top-4 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => {
            setIsBookingOpen(!isBookingOpen);
          }}
          className="rounded bg-clrLightBrown dark:bg-clrLightGreen flex items-center gap-2 p-1"
        >
          <span className="text-sm text-clrMilk dark:text-clrWhite">
            ثبت بلیط{" "}
            {modeId === "bus"
              ? "اتوبوس"
              : modeId === "train"
              ? "قطار"
              : "هواپیما"}
          </span>
          <Icon
            icon="iconamoon:arrow-left-2"
            className={`w-5 h-5 text-clrMilk dark:text-clrWhite transition-transform -rotate-90 ${
              isBookingOpen && "rotate-90"
            }`}
          />
        </button>
      </FrameContainer>

      <div className="flex w-full rounded-2xl bg-clrMilk dark:bg-clrCoal items-center">
        {/* Travel mode Icon */}
        <div className="hidden md:flex flex-col justify-around gap-2 h-full bg-clrLightBrown dark:bg-black/20 rounded-r-2xl p-2 relative">
          <div
            className={`absolute bg-clrDarkBrown dark:bg-clrGreen w-full h-full right-0 top-0 dark:shadow-[0_0_10px_#41914e50] duration-200 rounded-r-2xl`}
          />
          {tabs.map(
            (tab) =>
              tab.id === modeId && (
                <>
                  <div
                    key={tab.id}
                    className={`flex items-center gap-2 px-2 py-1 text-sm rounded transition-colors relative ${
                      activeTab === tab.id
                        ? "text-clrMilk"
                        : "text-clrMilk dark:text-clrWhite/70 hover:dark:text-clrLightGreen"
                    }`}
                  >
                    <Icon icon={tab.icon} className="w-5 h-5" />
                  </div>
                </>
              )
          )}
        </div>

        <div className="w-full mx-auto flex flex-col items-center pt-8 md:pt-0 md:justify-center gap-7 h-full">
          {/* Progress bar */}
          <div className="flex items-center gap-2 w-11/12 relative">
            <div
              className={`absolute duration-500 -top-2 ${
                currentStep === 1
                  ? "right-0"
                  : currentStep === 2
                  ? "right-1/2 translate-x-1/2"
                  : "right-[calc(100%-24px)]"
              }`}
            >
              <Icon
                icon="carbon:location-filled"
                className="w-6 h-6 text-clrDarkBrown dark:text-clrLightGreen dark:drop-shadow-[0_0_10px_#41914e]"
              />
            </div>

            {[...Array(totalSteps)].map((_, index) => (
              <>
                {index !== 0 && (
                  <hr className="w-full border-clrDarkGray/30 border-dashed dark:border-clrWhite" />
                )}
                <div
                  key={index}
                  className={`min-w-6 min-h-5 rounded-full flex items-center justify-center mb-2`}
                >
                  <Icon
                    icon="ic:outline-circle"
                    className="w-5 h-5 text-clrDarkBrown dark:text-clrLightGreen"
                    style={{
                      transform: `perspective(400px) rotateX(55deg)`,
                      transformOrigin: "center bottom",
                    }}
                  />
                </div>
              </>
            ))}
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-1 w-full items-center flex-1 md:flex-initial "
          >
            {/* Step 1: Trip Type + Cities */}
            <div
              className={`transition-opacity duration-300 w-11/12 ${
                currentStep === 1 ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              <div className="flex gap-4">
                {/* Step 1: Trip Type + Cities */}
                <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10 md:gap-2">
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
                    preferredStyles="hidden md:block duration-200 h-full hover:shadow-[0_0_5px_#dda15e] hover:dark:shadow-[0_0_5px_#41914e]"
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
            </div>

            {/* Step 2: Dates */}
            <div
              className={`transition-opacity duration-300 w-11/12 ${
                currentStep === 2 ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              <div className="flex gap-2 justify-center w-full">
                <div className="flex flex-col md:flex-row gap-2 items-center md:items-stretch justify-center w-full">
                  <FrameContainer
                    backgroundColor={1}
                    preferredStyles="w-1/2 md:w-full"
                  >
                    <div className="flex items-center p-2 rounded bg-white dark:bg-clrCoal relative min-w-32 w-full">
                      <div
                        className={`absolute w-[49%] h-[calc(100%_-_4px)] top-0.5 right-0.5 rounded border border-clrDarkBrown/20 dark:border-none bg-clrLightBrown/20 dark:bg-clrLightGreen duration-200 ${
                          tripType === "roundTrip" && "right-[49%]"
                        }`}
                      />
                      {/* Trip Type Radio Buttons */}
                      <button
                        className="flex items-center justify-around md:justify-center gap-5 cursor-pointer z-10 h-full w-full"
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
                  <div className="flex flex-col md:flex-row gap-10 w-full">
                    <TravelDatePicker
                      label="تاریخ رفت"
                      selected={formik.values.departureDate}
                      onChange={(date) =>
                        formik.setFieldValue("departureDate", date)
                      }
                      minDate={new Date()} // فقط یک شی Date ساده
                      formik={formik}
                      name="departureDate"
                    />

                    <TravelDatePicker
                      label="تاریخ برگشت"
                      selected={formik.values.returnDate}
                      onChange={(date) =>
                        formik.setFieldValue("returnDate", date)
                      }
                      minDate={formik.values.departureDate || new Date()} // اگر تاریخ رفت نداشتیم از امروز استفاده کن
                      tripType={tripType}
                      formik={formik}
                      name="returnDate"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Passengers */}
            <div
              className={`transition-opacity duration-300 w-11/12 ${
                currentStep === 3 ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              <PassengerSelector
                passengers={formik.values.passengers}
                onChange={(passengers) =>
                  formik.setFieldValue("passengers", passengers)
                }
                formik={formik}
                name="passengers"
              />
            </div>

            <div className="flex flex-row-reverse self-center justify-between w-11/12 mt-6">
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev + 1)}
                  className="px-3 py-1.5 text-sm font-medium text-white rounded bg-clrDarkBrown dark:bg-clrLightGreen shadow-[0_0_5px_#bc6c2540] hover:shadow-[0_0_5px_#bc6c25] dark:shadow-[0_0_5px_#41914e40] duration-200 hover:dark:shadow-[0_0_5px_#41914e]"
                >
                  گام بعد
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
                  className="px-3 py-1.5 text-sm font-medium text-clrDarkGray/80 border duration-200 border-clrLightBrown/70 hover:bg-clrDarkBrown hover:text-clrMilk dark:border-none dark:text-white rounded dark:bg-clrDarkGray hover:dark:bg-clrDarkGray/90"
                >
                  گام قبل
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </FrameContainer>
  );
}