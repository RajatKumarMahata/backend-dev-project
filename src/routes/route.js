const express = require('express');
const router = express.Router();
const weather= require("../controllers/weather")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/londonWeather",weather.londonWeather)
router.get("/weatherOfMentionedCities", weather.weather)

module.exports = router;