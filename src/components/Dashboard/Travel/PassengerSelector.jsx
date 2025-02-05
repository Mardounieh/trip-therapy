import { Icon } from "@iconify/react";
import FrameContainer from "../../../UI/FrameContainer";

const maxValues = {
  adults: 9,
  children: 4,
  infants: 2
};

export default function PassengerSelector({ passengers, onChange, formik, name }) {
  const updatePassengers = (type, action) => {
    const newPassengers = { ...passengers };

    if (action === "increment" && newPassengers[type] < maxValues[type]) {
      if (type === "infants" && newPassengers.infants >= newPassengers.adults) {
        return;
      }
      newPassengers[type]++;
    } else if (action === "decrement") {
      if (type === "adults" && newPassengers.adults <= newPassengers.infants) {
        return;
      }
      if (newPassengers[type] > 0) {
        newPassengers[type]--;
      }
    }
    
    onChange(newPassengers);
  };

  return (
    <div className="flex items-center gap-2 w-full self-center">
      <FrameContainer backgroundColor={2} preferredStyles="w-1/4">
        <div className="flex items-center w-full justify-center gap-4 p-4 rounded bg-white dark:bg-clrDarkGray">
          <Icon
            icon="ph:users"
            className="w-5 h-5 text-clrDarkBrown dark:text-clrLightGreen"
          />
          <span className="text-sm text-clrDarkGray dark:text-clrWhite">
            {passengers.adults + passengers.children + passengers.infants} مسافر
          </span>
        </div>
      </FrameContainer>

      <FrameContainer backgroundColor={1} preferredStyles="w-full relative">
        <div className="z-10 w-full p-4 flex items-center gap-2 rounded bg-white dark:bg-clrDarkGray">
          {[
            { type: "adults", label: "بزرگسال" },
            { type: "children", label: "کودک" },
            { type: "infants", label: "نوزاد" },
          ].map(({ type, label }) => (
            <div
              key={type}
              className="flex items-center justify-between gap-2"
              title={`حداکثر ${maxValues[type]} ${label}`}
            >
              <span className="text-sm text-clrDarkGray dark:text-clrWhite">
                {label}
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => updatePassengers(type, "decrement")}
                  className={`w-5 h-5 rounded bg-clrDarkBrown dark:bg-clrLightGreen text-clrWhite hover:shadow-[0_0_5px_#bc6c25] hover:dark:shadow-[0_0_5px_#41914e] duration-200 flex items-center justify-center`}
                >
                  <Icon icon="ic:round-minus" className="w-4 h-4 text-white" />
                </button>
                <span className="text-sm text-clrDarkGray dark:text-clrWhite">
                  {passengers[type]}
                </span>
                <button
                  type="button"
                  onClick={() => updatePassengers(type, "increment")}
                  className="w-5 h-5 rounded bg-clrDarkBrown dark:bg-clrLightGreen text-clrWhite hover:shadow-[0_0_5px_#bc6c25] hover:dark:shadow-[0_0_5px_#41914e] duration-200 flex items-center justify-center"
                >
                  <Icon icon="stash:plus" className="w-4 h-4 text-white" />
                </button>
              </div>
              {type === "infants" ? (
                ""
              ) : (
                <hr className="h-5 w-px bg-zinc-600 border-none" />
              )}
            </div>
          ))}
        </div>
        {/* Display validation error */}
        {formik.touched[name] && formik.errors[name] && (
          <div className="absolute -bottom-6 text-red-500 text-xs mt-1">
            {/* Convert object error to string or handle nested errors */}
            {typeof formik.errors[name] === "string"
              ? formik.errors[name]
              : Object.values(formik.errors[name]).join(", ")}
          </div>
        )}
      </FrameContainer>
    </div>
  );
}