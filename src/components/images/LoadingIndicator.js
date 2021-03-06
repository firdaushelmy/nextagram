import React from "react";

function LoadingIndicator() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      style={{
        margin: "auto",
        background: "transparent",
        display: "block",
        shapeRendering: "auto",
        width: "100vw",
        height: "100vh",
        viewBox: "0 0 0 0",
        preserveAspectRatio: "xMidYMid"
      }}
    >
      <circle
        cx="50"
        cy="50"
        r="23.2432"
        fill="none"
        stroke="#93dbe9"
        stroke-width="2"
      >
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1s"
          values="0;40"
          keyTimes="0;1"
          keySplines="0 0.2 0.8 1"
          calcMode="spline"
          begin="-0.5s"
        ></animate>
        <animate
          attributeName="opacity"
          repeatCount="indefinite"
          dur="1s"
          values="1;0"
          keyTimes="0;1"
          keySplines="0.2 0 0.8 1"
          calcMode="spline"
          begin="-0.5s"
        ></animate>
      </circle>
      <circle
        cx="50"
        cy="50"
        r="39.239"
        fill="none"
        stroke="#689cc5"
        stroke-width="2"
      >
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1s"
          values="0;40"
          keyTimes="0;1"
          keySplines="0 0.2 0.8 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="opacity"
          repeatCount="indefinite"
          dur="1s"
          values="1;0"
          keyTimes="0;1"
          keySplines="0.2 0 0.8 1"
          calcMode="spline"
        ></animate>
      </circle>
    </svg>
  );
}

export default LoadingIndicator;
