import './App.css';
import { Navigate,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Components/Signup';
import "react-toastify/ReactToastify.css"
import Login from './Components/Login';
import AdminDashboard from './Components/AdminDashboard';
import ParentDashboard from './Components/ParentDashboard';
import StudentDashboard from './Components/StudentDashboard';
import AddStudent from './Components/StudentDashboard/AddStudent';

function App() {
  return (
   <div className='App'>
    <Routes>
      <Route path='/' element={<Navigate to='/Login'/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/adminDashboard' element={<AdminDashboard/>}/>
      <Route path='/parentDashboard' element={<ParentDashboard/>}/>
      <Route path='/studentDashboard' element={<StudentDashboard/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/addStudent" element={<AddStudent/>}/>
    </Routes>
   </div>
  );
}

export default App;
