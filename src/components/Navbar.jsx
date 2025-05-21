import React, { useState, useEffect } from "react";

// Import all section components
import Home from "./Home";
import AlQuran from "./AlQuran";
import Media from "./Media";
import Library from "./Library";
import Sisters from "./Sisters";
import KidsCorner from "./KidsCorner";
import Event from "./Event";
import NerianSharif from "./NerianSharif";
import Khawjgan from "./Khawjgan";
import Footer from "./Footer";
import Huzoor from "./Huzoor";
import GoldenChain from "./GoldenChain";
import Pillars from "./Pillars";
import News from "./News";
import Membership from "./Membership";
import Bayat from "./Bayat";
import Khatam from "./Khatam";
import Learn from "./Learn";
import About from "./about";
import KhwajaGhulamMohiuddinGhaznavi from "./KhwajaGhulamMohiuddinGhaznavi";
import SuaAdvice from "./SuaAdvice"; // Added .js extension

const sections = [
  "Home",
  "Al Quran",
  "Media",
  "Library",
  "Sisters",
  "Kids Corner",
  "Event",
  "Nerian Sharif",
  "Khawjgan",
  "Huzoor",
  "Golden Chain",
  "Pillars",
  "News",
  "Membership",
  "Bayat",
  "Khatam",
  "Learn",
  "About us",
  "Khwaja Ghulam Mohiuddin Ghaznavi",
  "Shaykh ul Aalam’s Advice for the Seeker",
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeSection]);

  const handleClick = (section) => {
    const id = section.toLowerCase().replace(/\s+/g, "-");
    setActiveSection(id);
    setOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-[#1A3C34] text-white">
      {/* Sidebar for desktop and mobile */}
      <aside
        className={`fixed z-40 top-0 left-0 h-screen w-60 bg-[#2E5A50] overflow-y-auto border-r border-[#B89729] transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div
          className="px-6 py-6 cursor-pointer text-center"
          onClick={() => handleClick("home")}
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/logo.jpeg`}
            alt="Logo"
            className="w-24 h-24 mx-auto rounded-full"
          />
          <span className="block text-lg font-bold mt-2 text-[#D4AF37]">
            Ghulaman e Siddiqui Akbar International
          </span>
        </div>
        <nav className="flex flex-col space-y-1 px-4">
          {sections.map((section) => {
            const id = section.toLowerCase().replace(/\s+/g, "-");
            const isActive = activeSection === id;
            return (
              <button
                key={section}
                onClick={() => handleClick(section)}
                className={`text-left px-3 py-2 rounded-md font-semibold transition duration-300 ${
                  isActive
                    ? "bg-[#D4AF37] text-[#1A3C34] shadow"
                    : "hover:bg-[#B89729] hover:text-white"
                }`}
              >
                {section}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col md:ml-60">
        {/* Top navbar (mobile only) - hidden when sidebar is open */}
        {!open && (
          <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#2E5A50] text-white h-[70px] flex items-center px-4 justify-between shadow-md">
            <div
              onClick={() => handleClick("home")}
              className="flex items-center gap-2"
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/logo.jpeg`}
                alt="Logo"
                className="w-10 h-10 rounded-full"
              />
              <span className="font-bold text-[#D4AF37]">
                Ghulaman e Siddiqui Akbar International
              </span>
            </div>
            <button
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                    open ? "rotate-45 top-2.5" : "top-1"
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-6 bg-white transition-opacity duration-300 ease-in-out ${
                    open ? "opacity-0" : "top-3"
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                    open ? "-rotate-45 top-2.5" : "top-5"
                  }`}
                />
              </div>
            </button>
          </nav>
        )}

        {/* Content area */}
        <main
          id="main-content"
          className="pt-[90px] md:pt-6 px-4 md:px-6 overflow-auto"
          style={{
            minHeight: "100vh",
            background: "linear-gradient(to bottom, #1A3C34, #ffffff)",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          {activeSection === "home" && <Home />}
          {activeSection === "al-quran" && <AlQuran />}
          {activeSection === "media" && <Media />}
          {activeSection === "library" && <Library />}
          {activeSection === "sisters" && <Sisters />}
          {activeSection === "kids-corner" && <KidsCorner />}
          {activeSection === "event" && <Event />}
          {activeSection === "nerian-sharif" && <NerianSharif />}
          {activeSection === "khawjgan" && <Khawjgan />}
          {activeSection === "huzoor" && <Huzoor />}
          {activeSection === "golden-chain" && <GoldenChain />}
          {activeSection === "pillars" && <Pillars />}
          {activeSection === "news" && <News />}
          {activeSection === "membership" && <Membership />}
          {activeSection === "bayat" && <Bayat />}
          {activeSection === "khatam" && <Khatam />}
          {activeSection === "learn" && <Learn />}
          {activeSection === "about" && <About />}
          {activeSection === "khwaja-ghulam-mohiuddin-ghaznavi" && (
            <KhwajaGhulamMohiuddinGhaznavi />
          )}
          {activeSection === "shaykh-ul-aalam’s-advice-for-the-seeker" && (
            <SuaAdvice />
          )}
        </main>
      </div>
    </div>
  );
}