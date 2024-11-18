import { useState, useEffect } from "react";

export const DarkModeComponent = (Component: any, darkMode: boolean) => {
  return function (props:any) {
    return (
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Component {...props}/>
      </div>
    );
  };
};
