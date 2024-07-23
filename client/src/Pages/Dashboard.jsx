import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        Dashboard
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
      </div>
      <footer className="dashboard-footer">
        © 2024 AlgoU Online Judge
      </footer>
    </div>
  );
};

export default Dashboard;
