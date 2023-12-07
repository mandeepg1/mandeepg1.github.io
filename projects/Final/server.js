const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

const upload = multer({ dest: __dirname + "/public/images" });

mongoose
  .connect("mongodb+srv://mandeep-gujral:mandeep02@mandeep.2m0yy2o.mongodb.net/")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const driverSchema = new mongoose.Schema({
  name: String,
  age: String,
  team: String,
  stats: [String],
  img: String,
});

const Driver = mongoose.model("Driver", driverSchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/drivers", async (req, res) => {
  const drivers = await Driver.find();
  res.send(drivers);
});

app.get("/api/drivers/:id", async (req, res) => {
  const driver = await Driver.findOne({ _id: req.params.id });
  res.send(driver);
});

app.delete("/api/drivers/:id", async (req, res) => {
  const driver = await Driver.findByIdAndDelete(req.params.id);
  res.send(driver);
});

app.post("/api/drivers", upload.single("img"), async (req, res) => {
  const result = validateDriver(req.body);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const driver = new Driver({
    name: req.body.name,
    age: req.body.age,
    team: req.body.team,
    stats: req.body.stats.split(',').map(stat => stat.trim()), // Convert string to array
    img: req.body.img,
  });

  if (req.file) {
    driver.img = "images/" + req.file.filename;
  }

  await createDriver(res, driver);
});

app.put("/api/drivers/:id", upload.single("img"), (req, res) => {
  //const id = parseInt(req.params.id);
  const result = validateDriver(req.body);
  console.log(result);

  if (result.error) {
      res.status(400).send(result.error.details[0].message);
      return;
  }
  updateDriver(req, res);
});

const createDriver = async (res, driver) => {
  await driver.save();
  res.send({ _id: driver._id, name: driver.name });
};

const updateDriver = async (req, res) => {
  let updatingFields = {
    name: req.body.name,
    age: req.body.age,
    team: req.body.team,
    stats: req.body.stats.split(', ').map(stat => stat.trim()),
  };

  if (req.file) {
    updatingFields.img = "images/" + req.file.filename;
  }
  const result = await Driver.updateOne({ _id: req.params.id }, updatingFields);
  const driver = await Driver.findById(req.params.id);
  res.send(driver);
};

const validateDriver = (driver) => {
  const schema = Joi.object({
    _id:Joi.allow(""),
    name: Joi.string().required(),
    age: Joi.string().required(),
    team: Joi.string().required(),
    stats: Joi.string().required(),
    img: Joi.string(),
  });

  return schema.validate(driver);
};

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
