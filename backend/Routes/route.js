// routes/data.js
const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

router.get('/', async (req, res) => {
  try {
    const data = await Data.find({}).limit(30);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post = async(req, res) => {
  try {
    const newData = new Data(req.body);
        const savedData = await newData.save();
        res.status(201).json(savedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
  }
}

module.exports = router;
