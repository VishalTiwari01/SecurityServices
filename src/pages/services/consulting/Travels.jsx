// src/pages/services/consulting/ITNonIT.jsx

import React, { useState } from "react";
import recruitmentData from "../../../data/recruitmentData";

const Travels = () => {
  const [selected, setSelected] = useState("Travel & Tourism");

  const selectedData = recruitmentData.find((item) => item.category === selected);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="md:w-64 bg-gray-100">
        {recruitmentData.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(item.category)}
            className={`cursor-pointer px-4 py-3 font-semibold ${
              selected === item.category
                ? "bg-orange-400 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {item.category}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        {selectedData?.sections?.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-2 border-l-4 border-orange-400 pl-2">
              {section.title}
            </h2>
            <p className="text-gray-700">{section.content}</p>
          </div>
        )) || <p className="text-gray-500">No content available.</p>}
        {selectedData?.image?.length > 0 && (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
    {selectedData.image.map((img, index) => (
      <div
        key={index}
        className="border rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
      >
        <img
          src={img.src}
          alt={img.title}
          className="w-full h-auto rounded-md mb-4 object-cover"
        />
        <h3 className="font-bold text-lg text-gray-800">{img.title}</h3>
      </div>
    ))}
  </div>
)}
      </div>
    </div>
  );
};

export default Travels;
