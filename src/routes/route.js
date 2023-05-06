const express = require('express');
const router = express.Router();
const stockController= require("../Controller/stockController")
router.get("/getStock", stockController.getStock);


module.exports = router;