import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({userName}) => {

  return (
      <div className="bg-blue-100 text-black p-4 flex items-center justify-between">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUser} className="text-6xl mr-4"/>
          <div>
            <p className="text-xl font-semibold">Heyy !! Welcome Back</p>
            <p className='text-lg font-extrabold'>{userName}</p>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
