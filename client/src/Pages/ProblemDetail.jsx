import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ProblemDetail = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    const fetchProblem = async () => {
        try {
          const response = await axios.get(`/problems/${id}`);
          setProblem(response.data);
        } catch (error) {
          console.error('Error fetching problem:', error);
        }
    };
    fetchProblem();
  }, [id]);

  if (!problem) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{problem.title}</h2>
      <p>Description: {problem.description}</p>
      <p>Difficulty: {problem.difficulty}</p>
      <Link to={`/problems/edit/${problem._id}`}>Edit Problem</Link>
    </div>
  );
};

export default ProblemDetail;
