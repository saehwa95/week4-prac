// src/pages/works.js
import React from "react";
import { useLocation } from "react-router-dom";

const Works = () => {
  const location = useLocation();
  console.log("location :>> ", location);
  return (
    <div>
      <button>버튼</button>
    </div>
  );
};

export default Works;
