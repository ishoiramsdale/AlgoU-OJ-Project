import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from '../src/Components/Navbar';
import Home from '../src/Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import Profile from './Pages/Profile';
import Submissions from './Pages/Submissions';
import { UserContextProvider} from '../context/userContext';
import Dashboard from './Pages/Dashboard';
import ProblemList from './Pages/ProblemList';
import ProblemDetail from './Pages/ProblemDetail';
import CreateProblem from './Pages/CreateProblem';
import EditProblem from './Pages/EditProblem';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true

function App() {
  return (
    <UserContextProvider>
     <Navbar />
     <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/problems' element={<ProblemList />} />
      <Route path='/problems/:id' element={<ProblemDetail />} />
      <Route path='/problems/create' element={<CreateProblem />} />
      <Route path='/problems/edit/:id' element={<EditProblem />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/submissions' element={<Submissions />} />
     </Routes>
    </UserContextProvider>
  );
}

export default App
