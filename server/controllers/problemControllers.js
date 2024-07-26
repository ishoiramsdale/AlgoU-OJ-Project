const Problem = require('../models/problem');

const createProblem = async (req, res) => {
 try {
    const {title,description,difficulty} = req.body;
    const problem = await Problem.create({
        title,
        description,
        difficulty,
    });
    res.status(201).json(problem);
 } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal Server Error'});
 }
};

const getAllProblems = async (req, res) => {
    try {
      const problems = await Problem.find();
      res.json(problems);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getProblemById = async (req, res) => {
    try {
      const { id } = req.params;
      const problem = await Problem.findById(id);
      if (!problem) {
        return res.status(404).json({ error: 'Problem not found' });
      }
      res.json(problem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateProblemById = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, difficulty } = req.body;
      const updatedProblem = await Problem.findByIdAndUpdate(
        id,
        { title, description, difficulty },
        { new: true }
      );
      if (!updatedProblem) {
        return res.status(404).json({ error: 'Problem not found' });
      }
      res.json(updatedProblem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteProblemById = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedProblem = await Problem.findByIdAndDelete(id);
      if (!deletedProblem) {
        return res.status(404).json({ error: 'Problem not found' });
      }
      res.json({ message: 'Problem deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};


const getProblemsByDifficulty = async (req, res) => {
  try {
    const { level } = req.params;
    const problems = await Problem.find({ difficulty: level }).limit(5);
    res.status(200).json(problems);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await User.find().sort({ solvedProblems: -1 }).limit(10);
    res.status(200).json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
    createProblem,
    getAllProblems,
    getProblemById,
    updateProblemById,
    deleteProblemById,
    getProblemsByDifficulty,
    getLeaderboard,
};