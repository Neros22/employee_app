import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";

const EmmployeeProfiles = () => {

  const [employeeProfiles, setEmployeeProfiles] = useState([]);

  const fetchEmployeeProfiles = () => {
    axios.get("http://localhost:8080/api/v1/employee/list").then(resp => {
      setEmployeeProfiles(resp.data);
    });
  };

  useEffect(() => {
    fetchEmployeeProfiles();
  }, []);

  return employeeProfiles.map((employee, index) => {
      return (
      <div key={index}>
        <h1>{employee.name}</h1>
        <h2>{employee.email}</h2>
        <h2>{employee.dob}</h2>
        <h3>{employee.age}</h3>
      </div>
    )
  })
};

function App() {
  return (
    <div className="App">
      <EmmployeeProfiles />
    </div>
  );
}

export default App;
