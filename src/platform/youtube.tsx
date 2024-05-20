import React, { useState, useEffect } from "react";
import concealer from "../middleware";
import Switch from "../components/switch";

export default function YouTubeConcealer() {
  const [concealYoutube, setConcealYoutube] = useState(true);

  useEffect(() => {
    concealer(concealYoutube);
  }, [concealYoutube]);

  return (
    <div className="flex justify-between items-center">
      <div>YouTube</div>
      <Switch
        concealYoutube={concealYoutube}
        setConcealYoutube={setConcealYoutube}
      />
    </div>
  );
}
