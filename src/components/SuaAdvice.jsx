import React, { useState, useEffect } from 'react';

export default function SuaAdvice() {
  const [adviceData, setAdviceData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTitle, setSelectedTitle] = useState(''); // Track selected title

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

  // Handle dropdown change
  const handleTitleChange = (event) => {
    setSelectedTitle(event.target.value);
  };

  // Filter sections based on selected title
  const filteredData = selectedTitle
    ? adviceData.filter((advice) => advice.title === selectedTitle)
    : adviceData;

  return (
    <section id="event" className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#D4AF37' }}>
          Shaykh ul Aalam’s Advice for the Seeker
        </h2>
        {/* Dropdown Menu */}
        <div className="mb-8">
          <select
            value={selectedTitle}
            onChange={handleTitleChange}
            className="w-full md:w-1/2 mx-auto block p-2 rounded-md bg-[#2E5A50] text-[#FFFFFF] border border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] hover:bg-[#B89729] transition-colors"
          >
            <option value="">All Sections</option>
            {adviceData.map((advice, index) => (
              <option key={index} value={advice.title}>
                {advice.title || 'Untitled'}
              </option>
            ))}
          </select>
        </div>
        {isLoading && <p className="text-center text-gray-600">Loading advice...</p>}
        {error && <p className="text-center text-red-600">Error: {error}</p>}
        {!isLoading && !error && filteredData.length === 0 && (
          <p className="text-center text-gray-600">No advice data available.</p>
        )}
        {!isLoading && !error && Array.isArray(filteredData) && filteredData.length > 0 && (
          <div className="space-y-4">
            {filteredData.map((advice, index) => (
              <div
                key={index}
                className="border border-yellow-500 rounded-md p-4 bg-gray-900"
              >
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: '#D4AF37' }}
                >
                  {advice.title || 'Untitled'}
                </h3>
                <div className="text-sm mb-4" style={{ color: '#D4AF37' }}>
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
                  className="text-[#D4AF37] mb-4"
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
            ))}
          </div>
        )}
      </div>
    </section>
  );
}