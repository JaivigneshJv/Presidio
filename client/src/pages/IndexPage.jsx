import React, { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";
import { Link } from "react-router-dom";

const IndexPage = (props) => {
  // console.log(process.env.REACT_APP_BACKEND_URL);
  const [places, setPlaces] = useState([]);
  // console.log("he");
  // console.log(places);
  useEffect(() => {
    if (props.data !== undefined) {
      setPlaces(props.data);
    } else {
      axios.get("/feed-places").then((res) => {
        // console.log(res.data);
        setPlaces(res.data);
      });
    }
  }, []);

  const getMonth = () => {
    const date = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentMonth = monthNames[date.getMonth()];
    return currentMonth;
  };
  return (
    <div className="mt-20 grid gap-x-8 gap-y-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {places.length > 0 &&
        places.map((place) => (
          <Link to={"/place/" + place._id}>
            <div className="bg-gray-500 rounded-2xl flex">
              {place.photos?.[0] && (
                <img
                  className="rounded-lg object-cover aspect-square "
                  src={"https://presidio-task-backend.azurewebsites.net/uploads/" + place.photos?.[0]}
                  alt="place"
                />
              )}
            </div>
            <h2 className="text-md mt-2 truncate">{place.title}</h2>
            <h3 className="italic text-sm text-gray-500"> {place.address}</h3>
            {/* <h3 className="italic text-sm"> {place.maxGuests}</h3> */}

            <span className="text-sm font-light">
              {place.checkIn}-{place.checkOut}
              {"  "}
              {getMonth()}
            </span>
            <div className="mt-1 thin">
              <span className="text-md font-medium">₹{place.price}</span>{" "}
              <span className="font-light">night</span>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default IndexPage;
