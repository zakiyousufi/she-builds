import React, { useState } from 'react';
import '../../App.css';
import TogglePopup from './togglePopup';
import Team from './Team';

const Home = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="font-sans ml-64 bg-gray-100">
      <div className="welcome h-screen flex justify-center items-center flex-col text-gray-100">
        <h1 className='title text-9xl font-sans'>SAWE</h1>
        <p>Society of Afghan Women Engineers</p>
        <button
          type="button"
          onClick={openPopup}
          className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mt-5"
        >
          Get involved
        </button>
      </div>
      <Team />
      {isPopupOpen && <TogglePopup closePopup={closePopup} />}
    </div>
  );
}

export default Home;
