import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";
import Footer from "./components/Footer"; // ← import the footer

export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
      {splashDone && (
        <>
          <Navbar />
          {/* You can put your main content here */}
          <Footer />
        </>
      )}
    </>
  );
}
