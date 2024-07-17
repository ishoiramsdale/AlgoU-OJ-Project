const express = require('express');
const router = express.Router();
const problemControllers = require('../controllers/problemControllers');

router.post('/problems', problemControllers.createProblem);

router.get('/problems', problemControllers.getAllProblems);

router.get('/problems/:id', problemControllers.getProblemById);

router.put('/problems/:id', problemControllers.updateProblemById);

router.delete('/problems/:id', problemControllers.deleteProblemById);

module.exports = router;