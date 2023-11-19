import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
      console.log(response.data);
    });
  }, [id]);
  if (!place) return "";
  return (
    <div className="">
      <div className="mt-4 bg-gray-100 -mx-8 px-8 py-8 ">
        <h1 className="text-5xl truncate">{place.title}</h1>
        <h2 className=" text-2xl italic truncate">{place.address}</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2 grid-cols-[2fr_1fr] mt-6">
            <div>
              {place.photos?.[0] && (
                <div>
                  <img
                    src={process.env.REACT_APP_BACKEND_URL + place.photos?.[0]}
                    alt="place"
                    className="rounded-lg object-cover aspect-square"
                  />
                </div>
              )}
            </div>
            <div className="grid ">
              {place.photos?.[1] && (
                <img
                  src={process.env.REACT_APP_BACKEND_URL + place.photos?.[1]}
                  alt="place"
                  className="rounded-lg object-cover aspect-square"
                />
              )}
              <div className="overflow-hidden">
                {place.photos?.[2] && (
                  <img
                    src={process.env.REACT_APP_BACKEND_URL + place.photos?.[2]}
                    alt="place"
                    className="rounded-lg object-cover aspect-square relative top-2"
                  />
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="my-4">
                  <h2 className="font-semibold text-2xl mb-2">Description</h2>
                  <p className="text-md text-gray-700">{place.description}</p>
                </div>
                <div className="mt-4">
                  <p className="text-md text-gray-700">
                    Check In Dates:{" "}
                    <span className="font-semibold">
                      {place.checkIn}-{place.checkOut}
                    </span>
                  </p>
                  <p className="text-md text-gray-700">
                    Max Guests :{" "}
                    <span className="font-semibold">{place.maxGuests}</span>
                  </p>
                  <p className="text-lg text-gray-700 mt-2">
                    Price :{" "}
                    <span className="font-semibold">₹{place.price}</span>
                  </p>
                </div>
              </div>
              <button className="primary mt-3">Book</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-3xl mt-10">Extra Information</h3>
        <span className="mt-4">{place.extraInfo}</span>
      </div>
      <div className="grid grid-cols-5 justify-items-center text-center items-center mt-8 mb-8">
        {place.perks.map((perk, index) => (
          <div
            key={index}
            className="w-64 h-32 bg-gray-200 p-4 rounded border border-primary flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              id="tick"
              className="w-6 h-6 mr-2"
            >
              <path
                d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-32.1 281.7c-2.4 2.4-5.8 4.4-8.8 4.4s-6.4-2.1-8.9-4.5l-56-56 17.8-17.8 47.2 47.2L340 177.3l17.5 18.1-133.6 134.3z"
                fill="#f5385d"
                class="color000000 svgShape"
              ></path>
            </svg>
            {perk}
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default PlacePage;
