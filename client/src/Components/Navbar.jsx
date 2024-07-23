import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();

  const authPaths = ['/', '/login', '/register'];

  const handleLogout = () => {
    setUser(null);
    window.location.href = '/';
  };

  return (
    <nav>
      <ul>
        {authPaths.includes(location.pathname) && (
          <>
            {user && (
              <>
                  <Link to="/register">Register</Link>
                  <Link to="/login">Login</Link>
              </>
            )}
          </>
        )}
        {user && location.pathname === '/dashboard' && (
            <button onClick={handleLogout}>Logout</button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;