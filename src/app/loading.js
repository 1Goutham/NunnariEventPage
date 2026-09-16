import React from "react";
import Image from "next/image";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#010314",
      }}
    >
      <div
        style={{
          width: "80px",
          height: "80px",
          animation: "rotate 2s linear infinite",
          "@keyframes rotate": {
            from: { transform: "rotate(0deg)" },
            to: { transform: "rotate(360deg)" },
          },
        }}
      >
       
      </div>
    </div>
  );
};

export default Loader;
