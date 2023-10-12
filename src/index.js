const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const User = require("./models/user.model");
const Activity = require("./models/activity.model");
const Booking = require("./models/booking.model");

// bycrypt for hashing passwords
const bcrypt = require("bcrypt");
dotenv.config();

const saltRounds = 10;

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log("DB connection failure", error));

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
    credentials: true,
  })
);

// session stuff
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

//login route
app.post("/api/login", (req, res) => {
  const { body } = req;
  const { username, password } = body;

  User.findOne({ username }, (err, user) => {
    if (err) {
      return res.status(400).json({
        err,
      });
    }
    if (!user) {
      return res.status(400).json({
        err: "User not found",
      });
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        err: "Invalid password",
      });
    }
    res.json({
      user,
    });
  });
});

// activity routes
app.get("/api/activity/:id", (req, res) => {
  const { id } = req.params;
  // get and activity by id
  Activity.findById(id, (err, activity) => {
    if (err) {
      return res.status(400).json({
        err,
      });
    }
    res.json({
      activity,
    });
  });
});

app.post("/api/activity", (req, res) => {
  const { body } = req;

  const activity = new Activity(body);
  activity.save((err, activity) => {
    if (err) {
      return res.status(400).json({
        err,
      });
    }
    res.json({
      activity,
    });
  });
});

// get all activities
app.get("/api/activities", (req, res) => {
  Activity.find({}, (err, activities) => {
    if (err) {
      return res.status(400).json({
        err,
      });
    }
    res.json({
      activities,
    });
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//booking routes
app.post("/api/book-activity", (req, res) => {
  const { body } = req;

  const booking = new Booking(body);
  booking.save((err, booking) => {
    if (err) {
      return res.status(400).json({
        err,
      });
    }
    res.json({
      booking,
    });
  });
});

app.get("/api/bookings", (req, res) => {
  Booking.find({}, (err, bookings) => {
    if (err) {
      return res.status(400).json({
        err,
      });
    }
    res.json({
      bookings,
    });
  });
});

//user routes
app.post("/api/register", (req, res) => {
  const { body } = req;
  // encrypt password
  const encryptedPassword = bcrypt.hashSync(body.password, saltRounds);
  body.password = encryptedPassword;

  const user = new User(body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err,
      });
    }
    res.json({
      user,
    });
  });
});

app.get("/api/user/:id", (req, res) => {
  const { id } = req.params;
  // get and event by id
  User.findById(id, (err, user) => {
    if (err) {
      return res.status(400).json({
        err,
      });
    }
    res.json({
      user,
    });
  });
});

console.log("Server running on port:", PORT);
app.listen(PORT);
