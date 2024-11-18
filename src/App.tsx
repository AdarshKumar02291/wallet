import React, { useState } from "react";
import { DarkModeComponent } from "./hoc/DarkMode";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Wrap the Header component with the DarkModeComponent HOC
  const WrappedHeader = DarkModeComponent(Header, darkMode);
  const WrappedMain = DarkModeComponent(Main,darkMode);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <WrappedHeader darkMode={darkMode} setDarkMode={setDarkMode} />
      <WrappedMain/>
    </div>
  );
};

export default App;
