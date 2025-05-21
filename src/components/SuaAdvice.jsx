import React, { useState, useEffect } from 'react';

export default function SuaAdvice() {
  const [adviceData, setAdviceData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null); // Track the currently open dropdown

  useEffect(() => {
    setIsLoading(true);
    fetch('src/Data/suaAdvice.json')
      .then((response) => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        let arrayData = data;
        if (!Array.isArray(data)) {
          if (data && typeof data === 'object' && Array.isArray(data.lectures)) {
            arrayData = data.lectures;
          } else {
            console.error('Data is not an array, received:', data);
            throw new Error('Fetched data is not an array or does not contain a lectures array');
          }
        }
        console.log('Processed data:', arrayData);
        setAdviceData(arrayData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching advice data:', error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  // Toggle the dropdown for a specific advice entry
  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="event" className="min-h-screen pt-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#1A3C34' }}>
          Shaykh ul Aalam’s Advice for the Seeker
        </h2>
        {isLoading && <p className="text-center text-gray-600">Loading advice...</p>}
        {error && <p className="text-center text-red-600">Error: {error}</p>}
        {!isLoading && !error && adviceData.length === 0 && (
          <p className="text-center text-gray-600">No advice data available.</p>
        )}
        {!isLoading && !error && Array.isArray(adviceData) && adviceData.length > 0 && (
          <div className="space-y-4">
            {adviceData.map((advice, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg border"
                style={{ borderColor: '#2E5A50' }}
              >
                {/* Title as clickable dropdown toggle */}
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                  style={{ color: '#1A3C34' }}
                  aria-expanded={activeIndex === index}
                  aria-controls={`content-${index}`}
                >
                  <h3 className="text-xl font-semibold">
                    {advice.title || 'Untitled'}
                  </h3>
                  <span className="text-2xl">
                    {activeIndex === index ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                {/* Content (shown only when expanded) */}
                {activeIndex === index && (
                  <div
                    id={`content-${index}`}
                    className="px-6 py-4 transition-all duration-300 ease-in-out"
                  >
                    <div className="text-sm mb-4" style={{ color: '#2E5A50' }}>
                      <p>
                        <span className="font-medium">Hijri Date:</span>{' '}
                        {advice.dateHijri || 'Not specified'}
                      </p>
                      <p>
                        <span className="font-medium">Gregorian Date:</span>{' '}
                        {advice.dateGregorian || 'Not specified'}
                      </p>
                    </div>
                    <div
                      className="text-gray-700 mb-4"
                      dangerouslySetInnerHTML={{
                        __html: (advice.content || 'No content available').replace(/\n/g, '<br />'),
                      }}
                    />
                    {advice.video && (
                      <a
                        href={advice.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 rounded-md text-white font-medium transition-colors"
                        style={{ backgroundColor: '#D4AF37' }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#B89729')}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#D4AF37')}
                      >
                        Watch Video
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}