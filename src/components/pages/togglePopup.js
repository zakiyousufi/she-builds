import React from "react";
import { HiX } from "react-icons/hi";
import { FaUserPlus, FaHandHoldingHeart, FaDonate } from "react-icons/fa";

const TogglePopup = ({ closePopup }) => {
  return (
    <div className="popup relative p-4 w-full max-w-4xl max-h-full">
      <div className="relative bg-white rounded-lg shadow bg-sky-500 bg-opacity-90">
        <button
          type="button"
          onClick={closePopup}
          className="close absolute top-3 end-2.5 hover:bg-gray-100 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="popup-modal"
        >
          <HiX className="h-6 w-6 text-white hover:text-sky-500" />
          <span className="sr-only">Close modal</span>
        </button>
        <div className="p-4 md:p-5 text-center">
          <h3 className="mb-5 text-3xl font-normal text-gray-100 dark:text-gray-400">
            Get involved
          </h3>
          <div className="flex justify-center items-center flex-col space-y-4">
            <a 
              href="https://forms.gle/eQe17y3pJwdceswWA "
              target="_blank"
              rel="noreferrer"
              className="decoration-none flex text-xl font-normal text-white hover:text-gray-200"
            >
              Membership
              &nbsp;
              <FaUserPlus />
            </a>
            <a 
              href="https://forms.gle/cg4KsJEDG3hNmz4UA"
              target="_blank"
              rel="noreferrer"
              className="decoration-none flex text-xl font-normal text-white hover:text-gray-200"
            >
              Volunteer opertunities
              &nbsp;
              <FaHandHoldingHeart />
            </a>
            <a 
              href="https://forms.gle/6T1Ran1WGHqfBJJb8"
              target="_blank"
              rel="noreferrer"
              className="decoration-none flex text-xl font-normal text-white hover:text-gray-200"
            >
              Donate
              &nbsp;
              <FaDonate />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TogglePopup;
