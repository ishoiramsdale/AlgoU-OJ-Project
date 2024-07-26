const express = require('express');
const router = express.Router();
const Submission = require('../models/submission');

router.get('/user/:userId', async (req, res) => {
  try {
    const submissions = await Submission.find({ userId: req.params.userId });
    if (!submissions) {
      return res.status(404).send('No submissions found for this user');
    }
    res.json(submissions);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id);
    if (!submission) {
      return res.status(404).send('Submission not found');
    }
    res.json(submission);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

router.post('/', async (req, res) => {
  const { userId, problemId, code, status } = req.body;
  try {
    const newSubmission = new Submission({
      userId,
      problemId,
      code,
      status,
      createdAt: new Date()
    });
    const savedSubmission = await newSubmission.save();
    res.json(savedSubmission);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;

