import React, { useState } from "react";
import logisticsData from "../../../data/logisticsData";
const DeliveryBoy = () => {
  const [selectedItem, setSelectedItem] = useState(logisticsData[1]);
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Select Service</h2>
            <ul className="space-y-1">
              {logisticsData.map((item) => (
                <li
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`cursor-pointer px-4 py-3 text-gray-800 hover:bg-orange-100 rounded-md transition ${
                    selectedItem.id === item.id
                      ? "bg-orange-500 text-white"
                      : ""
                  }`}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedItem.title}
            </h1>
            <p className="text-gray-700">{selectedItem.description}</p>

            {/* Standards Section */}
            {selectedItem.standards && (
              <>
                <h2 className="mt-6 text-xl font-bold text-orange-500">
                  {selectedItem.standards.heading}
                </h2>
                <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
                  {selectedItem.standards.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </>
            )}
            <h2 className="text-xl font-bold text-orange-500 mb-4">
              {selectedItem.servicesHeading}
            </h2>
            {selectedItem.services && (
              <div className="mt-6">
                <ul className="mt-4 grid grid-cols-2 gap-4 text-gray-700">
                  {selectedItem.services.map((service, idx) => (
                    <li
                      key={idx}
                      className="p-10 bg-gray-200 rounded-lg text-center font-semibold flex items-center justify-center space-x-2 transition-transform transform hover:scale-105 hover:bg-orange-500 hover:text-white shadow-md"
                    >
                      <span className="sm:text-3xl md:text-4xl">
                        {service.icon}
                      </span>
                      <span>{service.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DeliveryBoy;
