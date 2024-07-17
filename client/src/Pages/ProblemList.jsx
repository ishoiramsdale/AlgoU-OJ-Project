import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProblemList = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    fetchProblems();
  }, []);

  const fetchProblems = async () => {
    try {
      const response = await axios.get('/api/problems');
      setProblems(response.data);
    } catch (error) {
      console.error('Error fetching problems:', error);
    }
  };

  return (
    <div>
      <h2>Problem List</h2>
      <ul>
        {problems.map((problem) => (
          <li key={problem._id}>
            <Link to={`/problems/${problem._id}`}>{problem.title}</Link>
            <Link to={`/problems/edit/${problem._id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemList;
