import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';

const TeamCard = ({ name, image, position, bio }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  return (
    <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg mb-4 max-h-3/4">
      <img className="w-full h-48 object-cover cursor-pointer" src={image} alt={name} onClick={openPopup} />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{position}</p>
      </div>

      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-75 flex justify-center items-center overflow-y-auto">
          <div className="bg-white p-6 w-full md:max-w-md rounded-lg shadow-lg">
            <div className="flex justify-end">
              <button className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={closePopup}>
                <MdClose size={24} />
              </button>
            </div>
            <img className="w-full h-48 object-cover mb-4" src={image} alt={name} />
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <h2 className="text-xl font-bold mb-2">{position}</h2>
            <p className="text-gray-700 overflow-y-auto max-h-52 scrollbar-thumb-sky-500">{bio}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamCard;
