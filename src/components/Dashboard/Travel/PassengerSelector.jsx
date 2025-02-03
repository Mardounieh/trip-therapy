import { Icon } from "@iconify/react";

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
    <div className="flex items-center gap-2 w-[89%] self-center">
      <div className="flex items-center w-1/4 justify-center gap-1 p-2 rounded bg-clrDarkGray">
        <Icon icon="ph:users" className="w-5 h-5 text-clrLightGreen" />
        <span className="text-sm text-clrWhite">
          {passengers.adults + passengers.children + passengers.infants} مسافر
        </span>
      </div>

      <div className="z-10 w-full p-2 flex items-center gap-2 rounded shadow-lg bg-clrDarkGray">
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
            <span className="text-sm text-clrWhite">{label}</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => updatePassengers(type, "decrement")}
                className={`w-5 h-5 rounded bg-clrLightGreen text-clrWhite hover:shadow-[0_0_5px_#41914e] duration-200 flex items-center justify-center`}
              >
                <Icon icon="ic:round-minus" className="w-4 h-4" />
              </button>
              <span className="text-sm text-clrWhite">{passengers[type]}</span>
              <button
                type="button"
                onClick={() => updatePassengers(type, "increment")}
                className="w-5 h-5 rounded bg-clrLightGreen text-clrWhite hover:shadow-[0_0_5px_#41914e] duration-200 flex items-center justify-center"
              >
                <Icon icon="stash:plus" className="w-4 h-4" />
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
        <div className="text-red-500 text-sm mt-1">
          {/* Convert object error to string or handle nested errors */}
          {typeof formik.errors[name] === "string"
            ? formik.errors[name]
            : Object.values(formik.errors[name]).join(", ")}
        </div>
      )}
    </div>
  );
}