import React, { useState } from 'react';
import contentData from '../Data/subtopics.json';

export default function KhwajaGhulamMohiuddinGhaznavi() {
  const data = contentData?.subtopics || contentData || [];
  const [selectedTitle, setSelectedTitle] = useState(''); // Track selected title

  // Handle dropdown change
  const handleTitleChange = (event) => {
    setSelectedTitle(event.target.value);
  };

  // Filter sections based on selected title
  const filteredData = selectedTitle
    ? data.filter((section) => section.title === selectedTitle)
    : data;

  if (!Array.isArray(data)) {
    console.error('Data is not an array:', data);
    return (
      <section id="khwaja-ghulam-mohiuddin-ghaznavi" className="min-h-screen pt-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#FFFFFF]">Error: Invalid data format</p>
        </div>
      </section>
    );
  }

  return (
    <section id="khwaja-ghulam-mohiuddin-ghaznavi" className="min-h-screen pt-6 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#FFFFFF] text-center mb-8">
          Khwaja Ghulam Mohiuddin Ghaznavi
        </h2>
        {/* Dropdown Menu */}
        <div className="mb-8">
          <select
            value={selectedTitle}
            onChange={handleTitleChange}
            className="w-full md:w-1/2 mx-auto block p-2 rounded-md bg-[#2E5A50] text-[#FFFFFF] border border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] hover:bg-[#B89729] transition-colors"
          >
            <option value="">All Sections</option>
            {data.map((section, index) => (
              <option key={index} value={section.title}>
                {section.title}
              </option>
            ))}
          </select>
        </div>
        {/* Filtered Sections */}
        {filteredData.length > 0 ? (
          filteredData.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-2xl font-semibold text-[#FFFFFF] mb-4 border-b-2 border-[#D4AF37] pb-2">
                {section.title}
              </h3>
              <div className="bg-white rounded-lg shadow-inner p-4">
                <p className="text-gray-700 whitespace-pre-line">{section.content}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-[#FFFFFF] text-center">No sections available</p>
        )}
      </div>
    </section>
  );
}