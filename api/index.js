const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const imageDownloader = require("image-downloader");
const multer = require("multer");
const fs = require("fs");

const User = require("./models/User");
const Place = require("./models/Place");

require("dotenv").config();
app.use(express.json());
app.use(cookieParser());
const path = require("path");
const dirname = path.resolve();
app.use("/uploads", express.static(path.join(dirname, "/uploads")));

app.use(
  cors({
    credentials: true,
    origin: "",
  })
);

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("DB Connected successfully");
});

const jwtSecret = process.env.JWT_RANDOMKEY;

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  //   console.log(name, email, password);
  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, 10),
    });
    res.json(userDoc);
    // console.log(userDoc);
  } catch (e) {
    res.status(500).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userDoc);
        }
      );
    } else {
      res.status(422).json("password not match!");
    }
  } else {
    res.json("not found");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  //   console.log(token);
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      // console.log(userData);
      const { name, email, _id } = await User.findById(userData.id);
      // console.log(name, email, _id);
      res.json({ name, email, _id });
    });
  } else {
    res.json(null);
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("token").json(true);
});

app.post("/upload-by-link", async (req, res) => {
  const { link } = req.body;
  const newName = "photo" + Date.now() + ".jpg";
  await imageDownloader.image({
    url: link,
    dest: dirname + "/uploads/" + newName,
  });

  res.json(newName);
});

const photosMiddleware = multer({ dest: "uploads/" });
app.post("/upload", photosMiddleware.array("photos", 100), (req, res) => {
  try {
    const uploadedFiles = [];
    for (let i = 0; i < req.files.length; i++) {
      const { path, originalname } = req.files[i];
      const parts = originalname.split(".");
      const ext = parts[parts.length - 1];
      const newPath = path + "." + ext;
      fs.renameSync(path, newPath);
      uploadedFiles.push(newPath.replace("uploads/", ""));
    }
    res.json(uploadedFiles);
  } catch (e) {
    alert(e);
  }
});

app.post("/places", (req, res) => {
  const { token } = req.cookies;
  const {
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
  } = req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;

    const placeDoc = await Place.create({
      owner: userData.id,
      title,
      address,
      photos: addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
    });
    res.json(placeDoc);
  });
});

app.get("/places", async (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    const { id } = userData;
    res.json(await Place.find({ owner: id }));
  });
});

app.get("/feed-places", async (req, res) => {
  res.json(await Place.find());
});

app.post("/filter-places", async (req, res) => {
  const { title, location, checkIn, checkOut, maxGuests, price } = req.body;
  // console.log(req.body);
  const filter = {};
  if (title) filter.title = new RegExp(title, "i");
  if (location) filter.location = new RegExp(location, "i");
  if (checkIn) filter.checkIn = { $gte: new Date(checkIn) };
  if (checkOut) filter.checkOut = { $lte: new Date(checkOut) };
  if (maxGuests) filter.maxGuests = { $lte: Number(maxGuests) };
  if (price) filter.price = { $lte: Number(price) };

  try {
    const places = await Place.find(filter);
    res.json(places);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// app.get("/filter-places", async (req, res) => {
//   try {
//     const { title, location, checkIn, checkOut, maxGuests } = req.body;

//     const filteredResults = await Place.find({
//       title: { $regex: title, $options: "i" },
//     });
//     res.json(filteredResults);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

app.get("/places/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await Place.findById(id));
});

app.listen(8080);
