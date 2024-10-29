import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React, { useContext, useState } from 'react';
import LoginForm from './components/auth/LoginForm';
import AdminDashboard from './components/dashboard/AdminDashboard';
import EmployeeDashboard from './components/dashboard/EmployeeDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {

  const [user, setUser] = useState(null);

  const data = useContext(AuthContext);

  /*useEffect(() => {
    if (data) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  }, [data]
  );*/


  const handlelogin = (email, password) => {
    if (data && data.admin.find((a) => email === a.email && password === a.password)) {
      setUser({ role: 'admin' });
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (data) {
      const employee = data.employees.find((e) => email == e.email && password == e.password);
      if (employee) {
        setUser({role:'employee'});
      }
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }));
    } else {
      alert("Invalid Credentails");
    }
  }

  return (
    <>
      {!user && <LoginForm handlelogin={handlelogin} />}
      {user === 'admin' && <AdminDashboard />}
      {user === 'employee' && <EmployeeDashboard />}
    </>
  )
}

export default App