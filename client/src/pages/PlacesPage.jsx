import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddButton from "../assets/add.svg";
import { useParams } from "react-router-dom";
import Perks from "../Perks";
import axios from "axios";
import PhotosUploader from "../PhotosUploader";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PlacesPage = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  const navigate = useNavigate();
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [price, setPrice] = useState(0);

  function inputHeader(text) {
    return <h2 className="text-lg mt-4">{text}</h2>;
  }
  function inputDescription(text) {
    return <p className="text-sm italic text-gray-500">{text}</p>;
  }
  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function addNewPlace(e) {
    e.preventDefault();

    await axios.post("/places", {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
    });
    navigate("/account/Places");
  }
  return (
    <div>
      {action === undefined && (
        <div>
          <div className="text-center">
            <Link
              className=" inline-flex bg-primary text-white py-2 px-6 rounded-full"
              to={"/account/Places/new"}
            >
              <img src={AddButton} alt="Add new place" className="w-6 h-6" />
              Add new place
            </Link>
          </div>
          <div className="mt-4 mb-5">
            {places.length > 0 &&
              places.map((place) => (
                <Link
                  to={"/edit/places/" + place._id}
                  className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl mb-6"
                >
                  <div className="flex w-32 h-32 bg-gray-300 grow shrink-0 ">
                    {place.photos.length && (
                      <img
                        src={
                          "https://presidio-task-backend.azurewebsites.net/" +
                          place.photos[0]
                        }
                        alt="Photo"
                        className=""
                      />
                    )}
                  </div>
                  <div className="grow-0 shrink">
                    <h2 className="text-xl">{place.title}</h2>
                    <p className="text-sm mt-2">{place.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
      {action === "new" && (
        <div>
          <form onSubmit={addNewPlace}>
            {preInput("Title", "Title for your place")}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title, eg.(My apartment)"
            />
            {preInput("Address", "Address to this place")}
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Location, eg.(New York)"
            />
            {preInput("Photos", "Photos More = Better")}
            <PhotosUploader
              addedPhotos={addedPhotos}
              onChange={setAddedPhotos}
            />

            <div>
              {preInput("Description", "Brief Description of this place")}
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              {preInput("Amenities", "Sel Amenities or Perks")}
              <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                <Perks selected={perks} onChange={setPerks} />
              </div>
            </div>
            {preInput(
              "Extra Information",
              "house rules, check-in instructions, etc."
            )}
            <textarea
              value={extraInfo}
              onChange={(e) => setExtraInfo(e.target.value)}
            />
            {preInput(
              "Check In & Outs",
              "Check in and out times, remember to have some time window for cleaning"
            )}
            <div className="grid gap-2 sm:grid-cols-3">
              <div>
                <h3 className="mt-2 -mb-1">Check in time</h3>
                <input
                  type="text"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  placeholder="12:00"
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Check out time</h3>
                <input
                  type="text"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  placeholder="11:00"
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Max Guests</h3>
                <input
                  value={maxGuests}
                  onChange={(e) => setMaxGuests(e.target.value)}
                  type="number"
                />
              </div>
            </div>
            <div>
              <h3 className="mt-6 -mb-1">Price</h3>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
              />
            </div>
            <button className="primary my-4">Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PlacesPage;
