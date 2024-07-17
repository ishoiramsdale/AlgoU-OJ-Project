import {useContext} from 'react'
import {UserContext} from '../../context/userContext'
import '../App.css'
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const {user} = useContext(UserContext)
  return (
    <div className ='dashboard'>
        <h1>Dashboard</h1>
        {!!user && (<h1>Hi {user.name}!</h1>)}
        <nav>
        <ul>
          <li><Link to="/problems">View Problems</Link></li>
          <li><Link to="/problems/create">Create Problem</Link></li>
        </ul>
        </nav>
    </div>
  );
}
