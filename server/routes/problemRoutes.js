const express = require('express');
const router = express.Router();
const problemControllers = require('../controllers/problemControllers');

router.post('/problems', problemControllers.createProblem);

router.get('/problems', problemControllers.getAllProblems);

router.get('/problems/:id', problemControllers.getProblemById);

router.put('/problems/:id', problemControllers.updateProblemById);

router.delete('/problems/:id', problemControllers.deleteProblemById);

router.get('/problems/difficulty/:level', problemControllers.getProblemsByDifficulty);
router.get('/leaderboard', problemControllers.getLeaderboard);

module.exports = router;