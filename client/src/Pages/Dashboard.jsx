import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/userContext';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const [problems, setProblems] = useState({ easy: [], medium: [], hard: [] });
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get('/problems');
        const easy = response.data.filter(problem => problem.difficulty === 'easy').slice(0, 5);
        const medium = response.data.filter(problem => problem.difficulty === 'medium').slice(0, 5);
        const hard = response.data.filter(problem => problem.difficulty === 'hard').slice(0, 5);
        setProblems({ easy, medium, hard });
      } catch (error) {
        console.error('Error fetching problems:', error);
      }
    };

    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get('/leaderboard');
        setLeaderboard(response.data);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchProblems();
    fetchLeaderboard();
  }, []);

  const handleLogout = () => {
    setUser(null);
    window.location.href = '/';
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="user-actions">
          <Link to="/profile">Profile</Link>
          <Link to="/submissions">Submissions</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>
      <div className="dashboard-content">
        <h2>Welcome to the Dashboard!</h2>
        {!!user && <h2>Hi {user.name}!</h2>}

        <nav>
          <ul>
            <li><Link to="/problems">View Problems</Link></li>
            <li><Link to="/problems/create">Create Problem</Link></li>
          </ul>
        </nav>

        <div className="problems-container">
          <section className="problems-column">
            <h3>Easy Problems</h3>
            <ul>
              {problems.easy.map(problem => (
                <li key={problem._id}><Link to={`/problems/${problem._id}`}>{problem.title}</Link></li>
              ))}
            </ul>
          </section>

          <section className="problems-column">
            <h3>Medium Problems</h3>
            <ul>
              {problems.medium.map(problem => (
                <li key={problem._id}><Link to={`/problems/${problem._id}`}>{problem.title}</Link></li>
              ))}
            </ul>
          </section>

          <section className="problems-column">
            <h3>Hard Problems</h3>
            <ul>
              {problems.hard.map(problem => (
                <li key={problem._id}><Link to={`/problems/${problem._id}`}>{problem.title}</Link></li>
              ))}
            </ul>
          </section>
        </div>

        <section>
          <h3>Leaderboard</h3>
          <ul>
            {leaderboard.map(user => (
              <li key={user._id}>{user.name} - {user.solved} problems solved</li>
            ))}
          </ul>
        </section>
      </div>
      <footer className="dashboard-footer">
        © 2024 AlgoU Online Judge
      </footer>
    </div>
  );
};

export default Dashboard;
