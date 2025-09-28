import './App.css';
import { Navigate,Routes,Route } from 'react-router-dom';
import Signup from './Components/Signup';
import "react-toastify/ReactToastify.css";
import AddStudent from './Components/AdminDasboard/AddStudent';
// Enhanced UI Components
import AdminUI from './Components/AdminUI';
import StudentUI from './Components/StudentUI';
import ParentUI from './Components/ParentUI';
import Login_Enhanced from './Components/Login_Enhanced';

function App() {
  return (
   <div className='App'>
    <Routes>
      <Route path='/' element={<Navigate to='/Login'/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path="/addStudent" element={<AddStudent/>}/>
      <Route path="/admin-ui" element={<AdminUI/>}/>
      <Route path="/student-ui" element={<StudentUI/>}/>
      <Route path="/parent-ui" element={<ParentUI/>}/>
      <Route path="/Login" element={<Login_Enhanced/>}/>
      <Route path="/parent-ui" element={<ParentUI/>}/>
    </Routes>
   </div>
  );
}

export default App;