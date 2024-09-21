function EmployeeList({employeesList}) {

    return (
      <div className='List'>
        {employeesList.map((val) => (
          <div key={val.id}>
            {val.name}, {val.age}
          </div>
        ))}
      </div>
    );
  }
  
  export default EmployeeList;
  