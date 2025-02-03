import { useState } from "react";
import TravelBooking from "./Travel/TravelBooking";
import RouteMap from "./map/Map";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    departureDate: null,
    returnDate: null,
    passengers: {
      adults: 1,
      children: 0,
      infants: 0,
    },
    tripType: "oneWay",
  });

  const handleFormSubmit = (values) => {
    console.log("New form values:", values);
    setFormData(values);
  };

  return (
    <div className="relative flex justify-center w-full h-full">
      {/* Background overlay */}
      <div className="absolute inset-0 w-full h-full bg-white dark:bg-black/45 -z-10" />

      {/* Map */}
        <RouteMap formData={formData} />

      {/* Travel Fields */}
      <TravelBooking formData={formData} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Dashboard;