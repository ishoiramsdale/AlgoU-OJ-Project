import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/userContext';
import axios from 'axios';
import './Submissions.css';

const Submissions = () => {
  const { user } = useContext(UserContext);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get(`/submissions/user/${user._id}`);
        setSubmissions(response.data);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };

    fetchSubmissions();
  }, [user]);

  return (
    <div className="submissions-container">
      <h1>My Submissions</h1>
      <ul>
        {submissions.map(submission => (
          <li key={submission._id}>
            Problem: {submission.problemTitle}, Status: {submission.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Submissions;
