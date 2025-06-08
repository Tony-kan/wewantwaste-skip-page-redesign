import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CheckCircleIcon,
  XCircleIcon,
  CalendarDaysIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";

import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

const calculateTotalPrice = (price: number, vat: number): string => {
  const total = price * (1 + vat / 100);
  return total.toFixed(2);
};
const getCapacity = (size: number): string => {
  const capacities: { [key: number]: string } = {
    4: "Approx. 30-40 wheelbarrows",
    6: "Approx. 50-60 wheelbarrows",
    8: "Approx. 70-80 wheelbarrows",
    10: "Approx. 90-100 wheelbarrows",
    12: "Approx. 110-120 wheelbarrows",
    14: "Approx. 130-140 wheelbarrows",
    16: "Approx. 150-160 wheelbarrows",
    20: "Approx. 180-220 wheelbarrows",
    40: "Approx. 360-440 wheelbarrows",
  };
  return capacities[size] || "Large capacity";
};

// --- The Main Component ---
const SkipOptions: React.FC = () => {
  const [skips, setSkips] = useState<SkipProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<SkipProps[]>(
        "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
      )
      .then((response) => {
        setSkips(response.data);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-600">Loading available skips...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        <p>Error: Could not fetch skip options. {error}</p>
      </div>
    );
  }

  return (
    <section id="skip-options" className="w-full bg-gray-50 mt-2">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- CHANGE IS HERE --- */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skips.map((skip) => (
            <div
              key={skip.id}
              className="flex flex-col bg-white rounded-lg shadow-lg border border-gray-200"
            >
              <div className="flex-grow flex flex-col p-6">
                {/* 1. Card Header: Size and Info Icon */}
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900">
                    {skip.size} Yard Skip
                  </h3>
                  <div className="relative group">
                    <ExclamationTriangleIcon className="h-6 w-6 text-amber-500 cursor-pointer" />
                    <div className="absolute hidden group-hover:block bottom-full right-0 mb-2 w-max bg-gray-800 text-white text-sm rounded-md shadow-lg p-3 z-10">
                      <div>
                        <h1 className="mb-2 font-bold">
                          Important Restrictions :
                        </h1>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          {skip.allowed_on_road ? (
                            <CheckCircleIcon className="h-5 w-5 text-green-400" />
                          ) : (
                            <XCircleIcon className="h-5 w-5 text-red-400" />
                          )}
                          <span>Placeable on public roads</span>
                        </li>
                        <li className="flex items-center gap-2">
                          {skip.allows_heavy_waste ? (
                            <CheckCircleIcon className="h-5 w-5 text-green-400" />
                          ) : (
                            <XCircleIcon className="h-5 w-5 text-red-400" />
                          )}
                          <span>Allows heavy waste (soil/rubble)</span>
                        </li>
                      </ul>
                      <div className="absolute right-2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-800"></div>
                    </div>
                  </div>
                </div>

                {/* 2. Skip Image Placeholder */}
                <img
                  className="w-full h-48 my-2 lg:object-contain object-cover rounded-md"
                  src={"/skip_img.jpg"}
                  alt={`${skip.size} Yard Skip`}
                />

                {/* 3 & 4. Details Grid: Hire Period & Capacity */}
                <div className="flex-col gap-4 text-start">
                  <div>
                    <div className="flex justify-start items-center gap-2 text-gray-500">
                      <CalendarDaysIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Hire Period</span>
                    </div>
                    <p className="mt-1 ml-4 text-md font-bold text-gray-800">
                      {skip.hire_period_days} Days
                    </p>
                  </div>
                  <div>
                    <div className="flex mt-1 justify-start items-center gap-2 text-gray-500">
                      <ArchiveBoxIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Capacity</span>
                    </div>
                    <p className="mt-1 ml-4 text-sm font-bold text-gray-800">
                      {getCapacity(skip.size)}
                    </p>
                  </div>
                </div>

                {/* 5. Price Section */}
                <div className="mt-2 text-center">
                  <p className="text-2xl font-extrabold text-gray-900">
                    £{calculateTotalPrice(skip.price_before_vat, skip.vat)}
                  </p>
                  <p className="text-xs text-gray-500">
                    Total Price (Inc. VAT)
                  </p>
                </div>

                {/* 6. Action Button (pushed to the bottom) */}
                <div className="mt-auto pt-4">
                  <button className="w-full bg-blue-600 text-white font-bold py-3 px-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Select This Skip
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkipOptions;
