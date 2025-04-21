import React, { useState } from "react";
import facilityData from "../../../data/facilityData";

const plumbing = () => {
  const [selectedService, setSelectedService] = useState(facilityData[4]);

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 gap-6">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-gray-100 rounded-md shadow-sm">
        {facilityData.map((service) => (
          <button
            key={service.id}
            onClick={() => setSelectedService(service)}
            className={`w-full text-left px-4 py-3 border-l-4 transition-all ${
              selectedService.id === service.id
                ? "bg-orange-500 text-white"
                : ""
            }`}
          >
            {service.name}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <h2 className="text-2xl font-bold mb-2 uppercase text-gray-800">
          {selectedService.name} Services
        </h2>
        <p className="text-gray-700 mb-2">{selectedService.content1}</p>
        <p className="text-gray-700 mb-4">{selectedService.content2}</p>

        {selectedService.heading && (
          <h3 className="text-lg font-semibold text-orange-500 mb-4">
            {selectedService.heading}
          </h3>
        )}

        {/* Standards: Array format */}
        {Array.isArray(selectedService.standards) &&
          selectedService.standards.map((section, idx) => (
            <div key={idx} className="mb-6">
              <h4 className="text-md font-semibold text-gray-800 mb-2">
                {section.category}
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}

        {/* Standards: Object format */}
        {selectedService.standards?.points &&
          !Array.isArray(selectedService.standards) && (
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
              {selectedService.standards.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}

        {/* Waste Layout */}
        {selectedService.waste && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {selectedService.waste.map((item, idx) => (
              <div
                key={idx}
                className="group bg-gray-100 p-4 rounded-md shadow hover:bg-orange-500 transition duration-300 ease-in-out"
              >
                <div className="text-2xl mb-2 hover:text-white">{item.icon}</div>
                <h4 className="text-lg pb-2 font-bold text-gray-800 group-hover:text-white transition duration-300">{item.title}</h4>
                <p className="text-gray-600 group-hover:text-gray-100 transition duration-300">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default plumbing;
