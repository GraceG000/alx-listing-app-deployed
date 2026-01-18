// components/ui/Pill.tsx
import React from "react";

interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm border transition ${
        active ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700"
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;
