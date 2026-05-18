import React from "react";
import cardImg from '../assets/hero.png';

export default function Hello({ username, username1 }) {
  return (
    <>
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={cardImg} alt="Card" className="ml-150 w-50 h-80 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-20">{username}</h2>
      <p className="text-gray-600 mt-2">Card description goes here.</p>
    </div>

    <div className="bg-white shadow-md rounded-lg p-4 mt-4">
      <img src={cardImg} alt="Card" className="ml-150 w-50 h-80 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-20">{username1}</h2>
      <p className="text-gray-600 mt-2">Card description goes here.</p>
    </div>
    </>
  );
}
