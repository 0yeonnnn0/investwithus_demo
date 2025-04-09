import { useEffect, useState } from "react";

const Cursor = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 750); // 0.25초마다 토글

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`text-white font-thin ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ fontSize: "1.2em", fontWeight: 100 }}
    >
      |
    </span>
  );
};

export default Cursor;
