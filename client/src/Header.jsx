import React from "react";
import { useContext, useState } from "react";
import Airbnb from "./assets/Airbnb.svg";
import Search from "./assets/Search.svg";
import Hamburger from "./assets/Hamburger.svg";
import User from "./assets/user.svg";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext.jsx";
import World from "./assets/world.svg";
import axios from "axios";
import IndexPage from "./pages/IndexPage.jsx";

const Header = () => {
  const { user } = useContext(UserContext);
  const [search, setSearch] = useState(false);
  const [classname, setclassname] = useState("hidden");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState(0);
  const [checkOut, setCheckOut] = useState(0);
  const [maxGuests, setMaxGuests] = useState(0);
  const [data, setData] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [searched, setsearched] = useState(false);

  console.log(title, location, checkIn, checkOut, maxGuests);
  const handleSearch = async () => {
    try {
      const response = await axios.post("/filter-places", {
        title: title,
        location: location,
        checkIn: checkIn,
        checkOut: checkOut,
        maxGuests: maxGuests,
      });
      // console.log(title, location, checkIn, checkOut, maxGuests);
      setData(response.data);
      setShowSearch(true);
      setSearch(false);
      toggleSearch();
      setsearched(true);
    } catch (e) {
      console.log(e);
    }
  };

  const toggleSearch = () => {
    if (searched) {
      setData([]);
      setShowSearch(false);
      setsearched(false);
    }
    if (search) {
      setclassname("justify-center -mb-20");
    } else {
      setclassname("justify-center hidden");
    }
    setSearch(!search);
  };

  return (
    <div>
      {/* <div className=" -p-100 border-b border-grey-100"></div> */}
      <header className="flex justify-between ">
        <Link to={"/"} href="" className="flex items-center gap-1">
          <img
            src={Airbnb}
            alt="Airbnb Logo"
            className="h-24 w-24 ml-2 mt-2 absolute"
          />
        </Link>
        <div className="flex gap-4 border border-grey-300 rounded-full  py-2 px-6 shadow-md  shadow-gray-300 ml-96 font-light">
          <div>Anywhere</div>
          <div className="border-l border-gray-300"></div>
          <div>Any week</div>
          <div className="border-l border-gray-300"></div>
          <div>Add guests</div>
          <button className="bg-primary  p-1.5 rounded-full">
            <img
              src={Search}
              alt="Search Icon"
              onClick={toggleSearch}
              className="h-4 w-4"
            />
          </button>
        </div>
        <div className="flex gap-12 justify-center text-center">
          <Link to={user ? "/account" : "/login"} className="flex gap-4">
            <p className="text-sm mt-3 font-medium">Airbnb your home</p>
            <img src={World} alt="World Icon" className="h-6 w-6  mt-2.5" />
          </Link>
          <Link
            to={user ? "/account" : "/login"}
            className="flex items-center gap-2 border border-grey-300 rounded-full py-2 px-4"
          >
            <img src={Hamburger} alt="Hamburger Icon" className="h-4 w-4" />
            {!!user && <div>{user.name}</div>}
            <img src={User} alt="User Icon" className="h-6 w-6" />
          </Link>
        </div>
      </header>
      <div className={classname}>
        <div className="flex mt-10 justify-center ">
          <div className="grid gap-2 sm:grid-cols-6">
            <div>
              <h3 className="mt-2 -mb-1">Title</h3>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="title"
              />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Location</h3>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="location"
              />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Check in</h3>
              <input
                type="text"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                placeholder="0"
              />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Check out</h3>
              <input
                type="text"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                placeholder="0"
              />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Max Guests</h3>
              <input
                value={maxGuests}
                onChange={(e) => setMaxGuests(e.target.value)}
                type="number"
                placeholder="0"
              />
            </div>
            <button className="primary  my-8" onClick={handleSearch}>
              Search
            </button>
            <div className="h-0.5 wid-screen border-b border-gray-100 relative top-64 "></div>
          </div>
        </div>
      </div>
      {showSearch && (
        <div>
          <h2 className="text-md italic mt-16">Search Result</h2>
          <IndexPage data={data} />
          {/* Add more HTML here */}
        </div>
      )}
    </div>
  );
};

export default Header;
