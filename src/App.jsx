import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
      {splashDone && <Navbar />}
    </>
  );
}
