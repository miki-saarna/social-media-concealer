import React, { useState, useEffect } from "react";
import concealer from "../middleware";

export default function YouTubeConcealer() {
  const [concealYoutube, setConcealYoutube] = useState(true);

  useEffect(() => {
    concealer(concealYoutube);
  }, [concealYoutube]);

  return (
    <button onClick={() => setConcealYoutube((prevValue) => !prevValue)}>
      {concealYoutube ? "Display" : "Hide"} YouTube
    </button>
  );
}
