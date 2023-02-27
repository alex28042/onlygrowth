import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="p-0.5 rounded-xl bg-gradient-to-tl from-purple-400 to-pink-600">
      <div class="ktq4 h-full">
        <img className="w-8" src="./images/usuario.png"></img>
        <h3 class="pt-3 font-semibold text-lg text-white">{title}</h3>
        <p class="pt-2 value-text text-md text-gray-200 fkrr1">{description}</p>
      </div>
    </div>
  );
};

export default Card;
