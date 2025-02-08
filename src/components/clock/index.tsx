"use client";

import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState<Date>(new Date());
  const [binary, setBinary] = useState<1 | 0>(0);

  useEffect(() => {
    const id = setInterval(() => {
      setBinary((binary) => (binary === 0 ? 1 : 0));
    }, 800);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000 * 60);

    return () => clearInterval(id);
  }, []);

  return (
    <p>
      {time.getHours().toString().padStart(2, "0")}
      <span style={{ color: binary === 0 ? "unset" : "transparent" }}>:</span>
      {time.getMinutes().toString().padStart(2, "0")}
    </p>
  );
};

export default Clock;
