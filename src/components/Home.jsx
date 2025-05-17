import React from 'react';

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-700 text-white px-6 rounded-lg shadow-lg"
    >
      <h1 className="text-5xl font-extrabold mb-4">Welcome to Nerian Sharif</h1>
      <p className="max-w-2xl text-center text-lg leading-relaxed">
        A place of peace, knowledge, and spirituality. Explore the rich heritage and teachings through our dedicated sections.
      </p>
      <button
        onClick={() => {
          const el = document.getElementById('al-quran');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        className="mt-8 px-6 py-3 bg-white text-blue-700 font-semibold rounded shadow hover:bg-gray-100 transition"
      >
        Explore Al Quran
      </button>
    </section>
  );
}
