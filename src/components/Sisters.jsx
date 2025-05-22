import React, { useState, useEffect } from 'react';

export default function Sisters() {
  const [data, setData] = useState([]);
  const [openHeadings, setOpenHeadings] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch JSON data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('src/Data/women_corner.json');
        if (!response.ok) {
          throw new Error('Failed to fetch JSON data');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Toggle accordion for headings
  const toggleHeading = (titleIndex, headingIndex) => {
    setOpenHeadings((prev) => ({
      ...prev,
      [`${titleIndex}-${headingIndex}`]: !prev[`${titleIndex}-${headingIndex}`],
    }));
  };

  if (loading) {
    return (
      <section id="sisters" className="min-h-screen pt-24 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text">Loading...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="sisters" className="min-h-screen pt-24 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text">Error: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="sisters" className="min-h-screen pt-10 px-4 bg-primary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-text text-center mb-8">Sisters</h2>
        {data.map((title, titleIndex) => (
          <div key={titleIndex} className="mb-8">
            <h3 className="text-2xl font-semibold text-text mb-4 border-b-2 border-accent pb-2">
              {title.title}
            </h3>
            {title.headings.map((heading, headingIndex) => (
              <div key={headingIndex} className="mb-4">
                <button
                  onClick={() => toggleHeading(titleIndex, headingIndex)}
                  className="w-full text-left bg-secondary text-text font-medium py-3 px-4 rounded-lg hover:bg-accentHover transition-colors duration-200 flex justify-between items-center"
                >
                  <span>{heading.heading || 'General'}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      openHeadings[`${titleIndex}-${headingIndex}`] ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openHeadings[`${titleIndex}-${headingIndex}`] && (
                  <div className="mt-2 bg-white rounded-lg shadow-inner p-4">
                    {heading.qa.map((qa, qaIndex) => (
                      <div key={qaIndex} className="mb-4">
                        {qa.question && (
                          <p className="font-semibold text-primary">{qa.question}</p>
                        )}
                        {qa.answer && (
                          <p className="text-gray-700 mt-1">{qa.answer}</p>
                        )}
                        {qa.note && (
                          <p className="text-gray-600 italic mt-1">Note: {qa.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}