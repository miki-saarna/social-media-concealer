import React from "react";
import YouTubeConcealer from "./platform/youtube";

export default function App() {
  return (
    <div className="App">
      <h1>Social media concealer</h1>
      <div>
        <div>Conceal:</div>
        <YouTubeConcealer />
      </div>
    </div>
  );
}
