import React, { useState } from "react";

const ITNonIT = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(data[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-4">
            <ul className="space-y-1">
              {data.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer px-4 py-3 text-gray-800 hover:bg-orange-100 rounded-md transition ${
                    selectedItem.id === item.id
                      ? "bg-orange-500 text-white"
                      : ""
                  }`}
                  onClick={() => setSelectedItem(item)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div className="md:col-span-3 md:mr-24">
            {selectedItem.sections.map((section, idx) => (
              <div key={idx} className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                  {section.heading}
                </h1>
                <p className="text-gray-700 leading-relaxed">{section.text}</p>

                {section.image && (
                  <div className="mt-4 border rounded-lg flex flex-col p-4 shadow-md hover:shadow-lg transition duration-300 w-full sm:w-2/3">
                    <img
                      src={section.image}
                      alt={section.heading}
                      className="rounded-md mb-4"
                    />
                    <h3 className="font-bold text-lg text-gray-800">
                      {section.heading}
                    </h3>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ITNonIT;
