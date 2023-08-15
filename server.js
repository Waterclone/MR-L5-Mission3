const express = require("express");
const env = require("dotenv");

env.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 8001;

cars = [];

app.post("/api/cardata", (req, res) => {
  const newCar = req.body;
  newCar.id = cars.length + 1;
  cars.push(newCar);
  res.send(cars);
  console.log(cars);
});

// API 1

app.get("/api/carvalue", (req, res) => {
  const { model, year } = req.body;

  if (!model || !year) {
    res.status(400).send({ error: "Invalid value" });
    return;
  }

  const carValue = calculateCarValue({ model, year });

  if ("error" in carValue) {
    res.status(400).send(carValue);
  } else {
    res.send(carValue);
  }
});

function calculateCarValue(input) {
  const { model, year } = input;
  const modelValue = getModelValue(model);

  const currentYear = new Date().getFullYear();
  if (isNaN(year) || year < 1900 || year > currentYear) {
    return { error: "Invalid year value" };
  }
  if (modelValue === -1) {
    return { error: "Invalid model name" };
  }

  const carValue = modelValue * 100 + parseInt(year);
  return { car_value: carValue };
}

function getModelValue(model) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let value = 0;
  for (let i = 0; i < model.length; i++) {
    const char = model[i].toLowerCase();
    if (alphabets.includes(char)) {
      value += alphabets.indexOf(char) + 1;
    }
  }

  return value;
}

// API 2

app.get("/api/riskrating", (req, res) => {
  const { claim_history } = req.body;

  if (!claim_history || claim_history.trim() === "") {
    res.status(400).send({ error: "Invalid value or missing claim_history parameter" });
    return;
  } else {
    const keywords = ["collide", "crash", "scratch", "bump", "smash"];

    const occurrences = keywords.reduce((count, keyword) => count + (claim_history.toLowerCase().split(keyword).length - 1), 0);

    let riskRating;
    if (occurrences <= 1) {
      riskRating = 1;
    } else if (occurrences <= 2) {
      riskRating = 2;
    } else if (occurrences <= 3) {
      riskRating = 3;
    } else if (occurrences <= 4) {
      riskRating = 4;
    } else {
      riskRating = 5;
    }

    res.json({ risk_rating: riskRating });
  }
});

// API 3

app.get("/api/premiumquote", (req, res) => {
  const { car_value, risk_rating } = req.body;

  if (!car_value || !risk_rating) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  const premiumData = calculatePremium({ car_value, risk_rating });
  if (premiumData === null) {
    return res.status(400).json({ error: "Invalid input" });
  }

  return res.status(200).json(premiumData);
});

const calculatePremium = ({ car_value, risk_rating }) => {
  const yearlyPremium = car_value * (risk_rating / 100);
  const monthlyPremium = yearlyPremium / 12;
  return {
    monthly_premium: parseFloat(monthlyPremium.toFixed(2)),
    yearly_premium: parseFloat(yearlyPremium.toFixed(2)),
  };
};

// PORT SETTING

app.listen(8001, () => {
  console.log(`Server started and listening on port ${port}`);
});
