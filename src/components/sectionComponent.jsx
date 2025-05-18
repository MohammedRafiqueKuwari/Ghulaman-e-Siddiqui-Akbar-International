import React from 'react';

export default function Home() {
  // Create an array of 6 identical sections
  const sectionComponents = Array.from({ length: 6 }, (_, i) => (
    <div
      key={i}
      className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-700 text-white p-6 rounded-lg shadow-lg"
    >
      <h1 className="text-2xl font-extrabold mb-2 text-center">Welcome to Nerian Sharif</h1>
      <p className="text-center text-sm leading-relaxed">
        A place of peace, knowledge, and spirituality. Explore the rich heritage and teachings through our dedicated sections.
      </p>
      <button
        onClick={() => {
          const el = document.getElementById('al-quran');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        className="mt-4 px-4 py-2 bg-white text-blue-700 font-semibold rounded shadow hover:bg-gray-100 transition"
      >
        Explore Al Quran
      </button>
    </div>
  ));

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {sectionComponents}
    </div>
  );
}
