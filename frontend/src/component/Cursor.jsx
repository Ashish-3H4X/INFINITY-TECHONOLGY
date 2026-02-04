import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const moveCursor = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Small dot */}
      <div
        className="absolute w-[2px] h-[2px] bg-black rounded-full mix-blend-difference transition-transform duration-24"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
        }}
      ></div>
      {/* Outer ring */}
      <div
        className="absolute w-5 h-5 border border-black rounded-full mix-blend-difference transition-transform duration-24"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
          opacity: 0.8,
        }}
      ></div>
    </div>
  );
}
