import React from "react";
import { Link } from "react-router-dom";

const UnderDev = () => {
  return (
    <div className="under-dev font-sans">
        <h1 className="text-4xl font-bold">
          Under Development
        </h1>
        <p className="text-m font-bold">
          This page is uder development. for more information please contact us.
        </p>
        <Link
        to="/contact"
          className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mt-5"
        >
          Contact us
        </Link>
    </div>
  );
}

export default UnderDev;
