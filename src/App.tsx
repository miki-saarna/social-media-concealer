import React from "react";
import YouTubeConcealer from "./platform/youtube";
import { BoltSlashIcon } from "@heroicons/react/24/solid";

export default function App() {
  return (
    <div className="App w-80 bg-gray-800 text-base text-gray-50">
      <div className="flex justify-between items-center p-6 border-b border-gray-50/25">
        <h1>Social media concealer</h1>
        <BoltSlashIcon className="h-4 w-4" />
      </div>
      <div className="p-6">
        <YouTubeConcealer />
      </div>
    </div>
  );
}
