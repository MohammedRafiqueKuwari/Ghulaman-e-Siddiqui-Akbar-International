import React, { useState } from "react";
import contentData from "../Data/subtopics.json";

export default function KhwajaGhulamMohiuddinGhaznavi() {
  const subtopics = contentData?.subtopics || [];

  // Track which dropdowns are open
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleIndex = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="text-white space-y-6 px-4 py-6">
      <h1 className="text-3xl font-bold mb-6"style={{ color: '#D4AF37' }}>
        Khwaja Ghulam Mohiuddin Ghaznavi
      </h1>

      {subtopics.map((item, index) => (
        <section
          key={index}
          className="border border-yellow-500 rounded-md p-4 bg-gray-900 text-[#D4AF37]"
        >
          <button
            onClick={() => toggleIndex(index)}
            className="text-left w-full flex justify-between items-center text-xl font-semibold focus:outline-none text-[#D4AF37]"
          >
            <span>{item.title}</span>
            <span className="text-[#D4AF37]">
              {openIndexes.includes(index) ? "▲" : "▼"}
            </span>
          </button>

          {openIndexes.includes(index) && (
            <p className="text-[#D4AF37] mt-3 whitespace-pre-line">{item.content}</p>
          )}
        </section>
      ))}
    </div>
  );
}
