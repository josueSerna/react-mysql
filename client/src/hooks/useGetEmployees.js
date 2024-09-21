import { useState,useEffect } from "react";
import Axios  from "axios";

const useGetEmployees = () => {
  const [employeesList, setEmployees] = useState([]);

const getEmployees = () => {
  Axios.get("http://localhost:3001/employees").then((response) => {
    setEmployees(response.data);
  });
};

useEffect(() => {
  getEmployees();
}, []);

return {
  refreshEmployees:getEmployees,
  employeesList,
}
};

export default useGetEmployees;

