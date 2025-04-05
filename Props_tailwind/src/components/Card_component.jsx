import React from "react";

function Card_component({ name = "Anime", image, quote }) {
  return (
    <div className="min-w-sm bg-white rounded-2xl shadow-lg p-6 text-center space-y-4 m-5">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full border-4 border-indigo-500 object-cover"
      />

      <div>
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      </div>
      <p className="text-gray-600 text-sm">{quote}</p>
    </div>
  );
}
export default Card_component;
