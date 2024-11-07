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
    // Check session on every page load and set user if session exists
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setloggedInuserData(userData.data);
    }
  }, [user]); // Ensures session is checked whenever user state changes

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (data) {
      const employee = data.employees.find((e) => email === e.email && password === e.password);
      if (employee) {
        setUser('employee');
        setloggedInuserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleLogout = () => {
    // Clear session without reloading the page
    localStorage.removeItem('loggedInUser');
    setUser(null);
    setloggedInuserData(null);
  };

  return (
    <>
      {!user && <LoginForm handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard changeUser={setUser}/>}
      {user === 'employee' && <EmployeeDashboard changeUser={setUser} data={loggedInuserData} onLogout={handleLogout} />}
    </>
  );
};

export default App;
