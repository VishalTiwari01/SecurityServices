import React, { useState } from "react";
import securityGuardData from "../../../data/securityGuardData";

const Event = () => {
  const [selectedItem, setSelectedItem] = useState(securityGuardData[2]);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Select Service</h2>
            <ul className="space-y-1">
              {securityGuardData.map((item) => (
                <li
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`cursor-pointer px-4 py-3 text-gray-800 hover:bg-orange-100 rounded-md transition ${
                    selectedItem.id === item.id
                      ? "bg-orange-500 text-white"
                      : ""
                  }`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedItem.name}
            </h1>
            <p className="text-gray-700">{selectedItem.content1}</p>
            {selectedItem.content2 && (
              <p className="text-gray-700 mt-4">{selectedItem.content2}</p>
            )}
            {selectedItem.content3 && (
              <p className="text-gray-700 mt-4">{selectedItem.content3}</p>
            )}

            {/* Offers Section */}
            {selectedItem.offers && (
              <>
                <h2 className="mt-6 text-xl font-bold text-orange-500">
                  {selectedItem.offers.heading}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                  {selectedItem.offers.items.map((offer, index) => (
                    <div
                      key={index}
                      className="group bg-gray-100 p-4 rounded-md shadow hover:bg-orange-500 transition duration-300 ease-in-out"
                    >
                      <h3 className="text-lg pb-2 font-bold text-gray-800 group-hover:text-white transition duration-300">
                        {offer.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-100 transition duration-300">
                        {offer.description}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}

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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Event;
