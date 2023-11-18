import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

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
    let classes = "py-2 px-6";
    if (type === subpage) {
      classes += " bg-primary text-white rounded-full";
    }
    return classes;
  }
  if (toHome) return <Navigate to={toHome} />;

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
        <Link className={mapClass("profile")} to={"/account"}>
          My Profile
        </Link>

        <Link className={mapClass("bookings")} to={"/account/bookings"}>
          My Bookings
        </Link>
        <Link className={mapClass("Places")} to={"/account/Places"}>
          My Accommodations
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})<br />
          <button onClick={logout} className="primary max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
