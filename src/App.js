import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React, { useContext, useEffect, useState } from 'react';
import LoginForm from './components/auth/LoginForm';
import AdminDashboard from './components/dashboard/AdminDashboard';
import EmployeeDashboard from './components/dashboard/EmployeeDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInuserData, setloggedInuserData] = useState(null);

  const data = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
  })



  const handlelogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (data) {
      const employee = data.employees.find((e) => email === e.email && password === e.password)
      if (employee) {
        setUser('employee');
        setloggedInuserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }));
      }
    } else {
      alert("Invalid Credentials");
    }
  };


  return (
    <>
      {!user && <LoginForm handlelogin={handlelogin} />}
      {user === 'admin' && <AdminDashboard />}
      {user === 'employee' && <EmployeeDashboard data={loggedInuserData} />}
    </>
  )
}

export default App;