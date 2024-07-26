import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const Navbar = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  const authPaths = ['/', '/login', '/register'];

  return (
    <nav>
      <ul>
        {authPaths.includes(location.pathname) && (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            {user && (
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
        )}
        {user && location.pathname === '/dashboard' && (
          <li>
            AlgoU
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
