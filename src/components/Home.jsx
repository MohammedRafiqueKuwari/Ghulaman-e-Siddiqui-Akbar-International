import React from 'react';

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-700 text-white px-6 py-10 rounded-lg shadow-lg"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">Welcome to Nerian Sharif</h1>
      <p className="max-w-2xl text-center text-lg leading-relaxed mb-10">
        A place of peace, knowledge, and spirituality. Explore the rich heritage and teachings through our dedicated sections.
      </p>

      {/* Responsive 3x2 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-white text-blue-800 p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-bold mb-2">Card {index + 1}</h2>
            <p className="text-sm">Spiritual guidance and heritage content will be shown here.</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          const el = document.getElementById('al-quran');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        className="mt-10 px-6 py-3 bg-white text-blue-700 font-semibold rounded shadow hover:bg-gray-100 transition"
      >
        Explore Al Quran
      </button>
    </section>
  );
}
