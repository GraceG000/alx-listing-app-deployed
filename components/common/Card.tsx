import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, image, description, price }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-200">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <p className="text-gray-900 font-bold mt-3">${price} / night</p>
      </div>
    </div>
  );
};

export default Card;
