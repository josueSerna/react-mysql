import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import useGetEmployees from './hooks/useGetEmployees';


function App() {
   const {refreshEmployees, employeesList} = useGetEmployees();

  return (
    <div className='container'>
      <div className="App">
        <EmployeeList employeesList={employeesList}/>
      </div>
      <div className="card text-center">
        <div className="card-header">
          GESTIÓN DE EMPLEADOS
        </div>
        <div className="card-body">
          <EmployeeForm refreshEmployees={refreshEmployees}/>
        </div>
      </div>
    </div>
  );
}

export default App;
