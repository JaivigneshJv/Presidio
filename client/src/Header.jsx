import React from "react";
import { useContext } from "react";
import Airbnb from "./assets/Airbnb.svg";
import Search from "./assets/Search.svg";
import Hamburger from "./assets/Hamburger.svg";
import User from "./assets/user.svg";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext.jsx";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <header className="flex justify-between">
        <Link to={"/"} href="" className="flex items-center gap-1">
          <img
            src={Airbnb}
            alt="Airbnb Logo"
            className="h-24 w-24 ml-12 absolute"
          />
        </Link>
        <div className="flex gap-2 border border-grey-300 rounded-full py-2 px-4 shadow-md  shadow-gray-300 ml-32 mr-12">
          <div>Anywhere</div>
          <div className="border-l border-gray-300"></div>
          <div>Any week</div>
          <div className="border-l border-gray-300"></div>
          <div>Add guests</div>
          <button className="bg-primary  p-1.5 rounded-full">
            <img src={Search} alt="Search Icon" className="h-4 w-4" />
          </button>
        </div>
        <Link
          to={user ? "/account" : "/login"}
          className="flex items-center gap-2 border border-grey-300 rounded-full py-2 px-4"
        >
          <img src={Hamburger} alt="Hamburger Icon" className="h-4 w-4" />
          <img src={User} alt="User Icon" className="h-6 w-6" />
          {!!user && <div>{user.name}</div>}
        </Link>
      </header>
    </div>
  );
};

export default Header;
