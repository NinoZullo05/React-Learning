import React, { useState, useEffect } from "react";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  const [isDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <CurrencyConverter isDarkMode={isDarkMode} />
    </>
  );
}

export default App;
