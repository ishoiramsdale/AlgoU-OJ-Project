const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/leaderboard', async (req, res) => {
  try {
    const leaderboard = await User.find().sort({ solved: -1 }).limit(10); 
    res.status(200).json(leaderboard);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
