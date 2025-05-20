import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useSwipeable } from 'react-swipeable';
import { ArrowLeftIcon, ArrowRightIcon, MagnifyingGlassPlusIcon, MagnifyingGlassMinusIcon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

// Import pdfjs-dist text layer styles
import 'pdfjs-dist/web/pdf_viewer.css';

// Set the workerSrc to the static worker file in public/
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';

export default function Khawjgan() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);
  const [scale, setScale] = useState(1.0);
  const pdfContainerRef = useRef(null);

  // PDF metadata
  const pdfData = {
    title: 'Khatam e Khuwajgan Sharif',
    author: 'Unknown',
    pdfUrl: '/books/Khatam e Khuwajgan Sharif.pdf',
  };

  // Dynamic PDF scaling based on container width
  useEffect(() => {
    const updateScale = () => {
      if (pdfContainerRef.current && isViewerOpen) {
        const containerWidth = pdfContainerRef.current.offsetWidth;
        const isMobile = window.innerWidth <= 640; // Tailwind's 'sm' breakpoint
        const newScale = isMobile ? 1.0 : Math.min(containerWidth / 612, 1.0);
        setScale(newScale > 0.5 ? newScale : 0.5);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [isViewerOpen]);

  const handleOpenViewer = () => {
    setIsViewerOpen(true);
    setPageNumber(1);
    setError(null);
  };

  const handleCloseModal = () => {
    setIsViewerOpen(false);
    setNumPages(null);
    setScale(1.0);
    setError(null);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfData.pdfUrl;
    link.download = `${pdfData.title}.pdf`;
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
    <section id="khawjgan" className="min-h-screen pt-24 px-4  border-b">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4"style={{ color: "#D4AF37" }}>Khawjgan</h2>
        <p className="text-[#D4AF37] mb-8">
          Explore the sacred text of Khatam e Khuwajgan Sharif.
        </p>
        <button
          onClick={handleOpenViewer}
          className="bg-[#1A3C34] text-[#D4AF37] px-4 py-2 rounded hover:bg-yellow-600"
        >
          Read Khatam e Khuwajgan Sharif
        </button>
      </div>

      {isViewerOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full h-full sm:max-w-4xl sm:max-h-[90vh] flex flex-col">
            <div className="sticky top-0 bg-[#1A3C34] p-4 border-b flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-semibold truncate max-w-[200px] sm:max-w-none text-[#D4AF37]">
                  {pdfData.title}
                </h3>
                <span className="text-sm text-[#D4AF37]">by {pdfData.author}</span>
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
                    file={pdfData.pdfUrl}
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
                  onClick={handleDownload}
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
