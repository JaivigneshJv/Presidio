import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import UserIcon from "../assets/user1.svg";
import HotelIcon from "../assets/hotel.svg";

const AccountPage = () => {
  const [toHome, setToHome] = useState(null);

  const { ready, user, setUser } = useContext(UserContext);

  let { subpage } = useParams();
  if (subpage === undefined) subpage = "profile";

  async function logout() {
    await axios.post("/logout");
    setUser(null);
    setToHome("/");
  }

  if (!ready) {
    return <div>Loading...</div>;
  }

  if (ready && !user && !toHome) {
    return <Navigate to={"/login"} />;
  }

  function mapClass(type = null) {
    let classes = "py-2 px-6 flex gap-2 rounded-full";
    if (type === subpage) {
      classes += " bg-primary text-white ";
    } else {
      classes += " bg-gray-100 text-black";
    }
    return classes;
  }
  if (toHome) return <Navigate to={toHome} />;

  return (
    <div className="grow mt-8">
      <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
        <Link className={mapClass("profile")} to={"/account"}>
          <img src={UserIcon} alt="User icon" className="w-6 h-6" />
          Profile
        </Link>

        <Link className={mapClass("bookings")} to={"/account/bookings"}>
          <img
            src={HotelIcon}
            alt="Hotel icon"
            className="w-6 h-6 bg-text-black"
          />
          My Bookings
        </Link>
        <Link className={mapClass("Places")} to={"/account/Places"}>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            id="Mountains"
          >
            <path
              d="M96.28,91.63,75.76,58.5A26.06,26.06,0,0,0,83.29,24h6.37A6.84,6.84,0,0,0,90,10.3a7.07,7.07,0,0,0-1.39.08,6.8,6.8,0,0,0-12.65,0,7.16,7.16,0,0,0-1.39-.08,6.78,6.78,0,0,0-4.71,2.26l-.08.09a25.89,25.89,0,0,0-9-1.61A26.15,26.15,0,0,0,37.22,25.88,9.53,9.53,0,0,0,19.81,27.6a9.61,9.61,0,0,0-2.57-.22,9.6,9.6,0,0,0,.46,19.18H36.42A26.22,26.22,0,0,0,45.78,58.5l-4.5,7.26-8.9-13.35a1.56,1.56,0,0,0-2.5,0L3.75,91.59a1.52,1.52,0,0,0-.07,1.54A1.49,1.49,0,0,0,5,93.92H95a1.5,1.5,0,0,0,1.28-2.29Zm-38.22-.71H29.23L41.38,71.31l.86-1.4.87-1.4,5.21-8.42.79-1.27.8-1.28.56-.92,2,2.09.21.22a1.51,1.51,0,0,0,1.48.36,1.5,1.5,0,0,0,.68-.36l2.42-2.52,2.42,2.52a1.56,1.56,0,0,0,2.16,0l2.42-2.52,2.42,2.52a1.53,1.53,0,0,0,.62.38,1.77,1.77,0,0,0,.46.08,1.51,1.51,0,0,0,1.08-.46l.2-.22,2-2.09.57.92.8,1.28.78,1.27,19.1,30.83ZM23.3,67.69l1.59,1.66a1.55,1.55,0,0,0,2.17,0l1.49-1.55,1.5,1.55a1.54,1.54,0,0,0,2.16,0l1.5-1.55,1.49,1.55a1.48,1.48,0,0,0,1.08.46,1.5,1.5,0,0,0,1.09-.46L39,67.69l.59.88L25.7,90.92H7.8Zm7.83-11.75,6.13,9.19-1,1-1.49-1.56a1.52,1.52,0,0,0-1.08-.46h0a1.55,1.55,0,0,0-1.09.46l-1.49,1.56-1.5-1.56a1.51,1.51,0,0,0-1.08-.46h0a1.51,1.51,0,0,0-1.08.46L26,66.15l-1-1ZM17.7,43.56a6.6,6.6,0,0,1-.32-13.18h.33a6.48,6.48,0,0,1,2.6.54,1.54,1.54,0,0,0,1.34-.08,1.48,1.48,0,0,0,.74-1.11,6.55,6.55,0,0,1,13,0,1.71,1.71,0,0,0,.19.55,1.48,1.48,0,0,0,1.34.75,1.46,1.46,0,0,0,.55-.11,7,7,0,0,1,1.15-.37,6.22,6.22,0,0,1,1.78-.16,6.59,6.59,0,0,1-.33,13.18H17.7Zm22.31,3h.08a9.57,9.57,0,0,0,9.58-9.11,9.71,9.71,0,0,0-9.11-10.07c-.25,0-.49,0-.73,0A23.06,23.06,0,0,1,68.32,15.32c.48.17,1,.34,1.41.53s.94.43,1.4.66A23.26,23.26,0,0,1,77.24,21c.48.48.93,1,1.36,1.5s.77,1,1.13,1.5a23.07,23.07,0,0,1-5.55,32L62,36.36a1.49,1.49,0,0,0-1.27-.71,1.52,1.52,0,0,0-1.28.71L47.36,56a23.25,23.25,0,0,1-7.69-9.39ZM74.9,13.3a3.83,3.83,0,0,1,1.52.31,1.49,1.49,0,0,0,1.33-.07,1.53,1.53,0,0,0,.75-1.11,3.81,3.81,0,0,1,7.56,0,1.53,1.53,0,0,0,.75,1.11,1.5,1.5,0,0,0,1.34.07A3.84,3.84,0,1,1,89.65,21H81.23a26.27,26.27,0,0,0-8.46-7,3.7,3.7,0,0,1,1.94-.68ZM60.77,40l8.66,14-1.66,1.73-2.42-2.51a1.48,1.48,0,0,0-1.08-.47h0a1.51,1.51,0,0,0-1.08.46l-2.42,2.52-2.42-2.51a1.48,1.48,0,0,0-1.08-.47h0a1.51,1.51,0,0,0-1.08.46l-2.42,2.52L52.1,54Z"
              data-name="Layer 2"
              fill="#ffffff"
            ></path>
          </svg>
          My Accommodations
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="flex flex-col mt-56 justify-center flex-grow ">
          <div className="text-center max-w-lg mx-auto flex-grow ">
            Logged in as {user.name} ({user.email})<br />
            <button onClick={logout} className="primary max-w-sm mt-2">
              Logout
            </button>
          </div>
        </div>
      )}
      {subpage === "Places" && (
        <div>
          <PlacesPage />
        </div>
      )}
    </div>
  );
};

export default AccountPage;
