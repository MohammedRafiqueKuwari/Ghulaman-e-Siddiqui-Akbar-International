import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useSwipeable } from 'react-swipeable';
import { ArrowLeftIcon, ArrowRightIcon, MagnifyingGlassPlusIcon, MagnifyingGlassMinusIcon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

// Import pdfjs-dist text layer styles
import 'pdfjs-dist/web/pdf_viewer.css';

// Set the workerSrc to the static worker file in public/
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';

// Sample book data with local file paths
const books = [
  {
    id: 1,
    title: 'Miftah_Al_Kanz Part-1',
    author: 'Muhammad Anees Siddiqui',
    coverImage: 'public/cover/Miftah_Al_Kanz_by_Muhammad anees_siddiqui.png',
    pdfUrl: 'public/books/Miftah_Al_Kanz_by_Muhammad anees_siddiqui_part_1.pdf',
    content: 'Preview: In the 1920s, Jay Gatsby... (optional preview text).',
  },
  {
    id: 2,
    title: 'Miftah_Al_Kanz Part-2',
    author: 'Muhammad Anees Siddiqui',
    coverImage: 'public/cover/Miftah_Al_Kanz_by_Muhammad anees_siddiqui.png',
    pdfUrl: 'public/books/Miftah_Al_Kanz_by_Muhammad anees_siddiqui_part_2.pdf',
    content: 'Preview: In a dystopian future... (optional preview text).',
  },
];

export default function Library() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);
  const [scale, setScale] = useState(1.0);
  const pdfContainerRef = useRef(null);

  useEffect(() => {
    const updateScale = () => {
      if (pdfContainerRef.current && selectedBook) {
        const containerWidth = pdfContainerRef.current.offsetWidth;
        const isMobile = window.innerWidth <= 640; // Tailwind's 'sm' breakpoint
        const newScale = isMobile ? 1.0 : Math.min(containerWidth / 612, 1.0);
        setScale(newScale > 0.5 ? newScale : 0.5);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [selectedBook]);

  const handleReadOnline = (book) => {
    setSelectedBook(book);
    setPageNumber(1);
    setError(null);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
    setNumPages(null);
    setScale(1.0);
    setError(null);
  };

  const handleDownload = (pdfUrl, title) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setError(null);
  };

  const onDocumentLoadError = (error) => {
    console.error('PDF load error:', error);
    setError('Failed to load the PDF. Please ensure the file exists and is accessible.');
  };

  const goToPreviousPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2.0));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5));
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goToNextPage(),
    onSwipedRight: () => goToPreviousPage(),
    trackMouse: true,
  });

  return (
    <section id="library" className="min-h-screen pt-24 px-4  border-b">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: "#D4AF37" }}>Library</h2>
        <p className=" text-[#D4AF37] text-center mb-8">
          Browse our collection of books. Read online or download your favorites!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {books.map((book) => (
            <div
              key={book.id}
              className="border rounded-lg shadow-md p-2 hover:shadow-lg transition-shadow"
            >
              <img
                src={book.coverImage}
                alt={`${book.title} cover`}
                className="w-full h-100 object-cover rounded-md mb-2"
              />
              <h3 className="text-base font-semibold mb-1 truncate">{book.title}</h3>
              <p className="text-gray-600 text-xs mb-2 truncate">by {book.author}</p>
              <div className="flex space-x-1">
                <button
                  onClick={() => handleReadOnline(book)}
                  className="bg-blue-500 text-white px-2 py-1 text-xs rounded hover:bg-blue-600"
                >
                  Read Online
                </button>
                <button
                  onClick={() => handleDownload(book.pdfUrl, book.title)}
                  className="bg-green-500 text-white px-2 py-1 text-xs rounded hover:bg-green-600"
                >
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedBook && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full h-full sm:max-w-4xl sm:max-h-[90vh] flex flex-col">
            <div className="sticky top-0 bg-[#1A3C34] p-4 border-b flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-semibold truncate max-w-[200px] sm:max-w-none text-[#D4AF37]">
                  {selectedBook.title}
                </h3>
                <span className="text-sm text-[#D4AF37]">by {selectedBook.author}</span>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-[#D4AF37] hover:text-[#E6C567] p-2"
                aria-label="Close"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 bg-white">
              {error ? (
                <p className="text-red-500 text-center">{error}</p>
              ) : (
                <div
                  {...swipeHandlers}
                  ref={pdfContainerRef}
                  className="w-full mx-auto sm:max-w-full max-w-[90vw] overflow-x-auto sm:overflow-x-hidden"
                  style={{ maxWidth: '100%' }}
                >
                  <Document
                    file={selectedBook.pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    loading={<div className="text-center p-4 text-[#D4AF37]">Loading PDF...</div>}
                  >
                    <Page
                      pageNumber={pageNumber}
                      scale={scale}
                      renderTextLayer={true}
                      renderAnnotationLayer={true}
                      className="shadow-md min-w-[612px] sm:min-w-0"
                    />
                  </Document>
                </div>
              )}
            </div>

            {numPages && (
              <div className="sticky bottom-0 bg-[#1A3C34] p-4 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex space-x-2">
                  <button
                    onClick={goToPreviousPage}
                    disabled={pageNumber <= 1}
                    className="p-2 bg-[#2A5A50] rounded-full hover:bg-[#3A6A60] disabled:opacity-50"
                    aria-label="Previous Page"
                  >
                    <ArrowLeftIcon className="h-5 w-5 text-[#D4AF37]" />
                  </button>
                  <span className="text-sm text-[#D4AF37]">
                    Page {pageNumber} of {numPages}
                  </span>
                  <button
                    onClick={goToNextPage}
                    disabled={pageNumber >= numPages}
                    className="p-2 bg-[#2A5A50] rounded-full hover:bg-[#3A6A60] disabled:opacity-50"
                    aria-label="Next Page"
                  >
                    <ArrowRightIcon className="h-5 w-5 text-[#D4AF37]" />
                  </button>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={zoomOut}
                    disabled={scale <= 0.5}
                    className="p-2 bg-[#2A5A50] rounded-full hover:bg-[#3A6A60] disabled:opacity-50"
                    aria-label="Zoom Out"
                  >
                    <MagnifyingGlassMinusIcon className="h-5 w-5 text-[#D4AF37]" />
                  </button>
                  <span className="text-sm text-[#D4AF37]">Zoom: {(scale * 100).toFixed(0)}%</span>
                  <button
                    onClick={zoomIn}
                    disabled={scale >= 2.0}
                    className="p-2 bg-[#2A5A50] rounded-full hover:bg-[#3A6A60] disabled:opacity-50"
                    aria-label="Zoom In"
                  >
                    <MagnifyingGlassPlusIcon className="h-5 w-5 text-[#D4AF37]" />
                  </button>
                </div>
                <button
                  onClick={() => handleDownload(selectedBook.pdfUrl, selectedBook.title)}
                  className="p-2 bg-[#2A5A50] rounded-full hover:bg-[#3A6A60]"
                  aria-label="Download PDF"
                >
                  <ArrowDownTrayIcon className="h-5 w-5 text-[#D4AF37]" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

