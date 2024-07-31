import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  const authPaths = ['/', '/login', '/register'];

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };


  return (
    <nav>
      <ul>
        {authPaths.includes(location.pathname) ? (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </>
        ) : (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/submissions">Submissions</Link>
            </li>
            <li>
            <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
