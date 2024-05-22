import React, { useState, useEffect } from "react";
import { concealer } from "../middleware";
import Switch from "../components/switch";

export default function XConcealer() {
  const [concealX, setConcealX] = useState(true);

  useEffect(() => {
    concealer(concealX);
  }, [concealX]);

  return (
    <div className="flex justify-between items-center">
      <div>X</div>
      <Switch conceal={concealX} setConceal={setConcealX} />
    </div>
  );
}
