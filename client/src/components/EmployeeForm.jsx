import useAddEmployee from "../hooks/useAddEmployee";

function EmployeeForm({refreshEmployees}) {

    const {setName, setAge,setCountry,setPosition,setYears, addEmployee} = useAddEmployee(refreshEmployees);

    return (
        <>
            <div className="input-group mb-3">
                <span className='input-group-text' id='basic-addon1'>Nombre</span>
                <input className='form-control' placeholder="Nombre del empleado" type="text" onChange={(event) => { setName(event.target.value) }} />
            </div>
            <div className="input-group mb-3">
                <span className='input-group-text' id='basic-addon1'>Edad</span>
                <input className='form-control' placeholder="Edad del empleado" type="Number" onChange={(event) => { setAge(event.target.value) }} />
            </div>
            <div className="input-group mb-3">
                <span className='input-group-text' id='basic-addon1'>Pais</span>
                <input className='form-control' placeholder="Pais del empleado" type="text" onChange={(event) => { setCountry(event.target.value) }} />
            </div>
            <div className="input-group mb-3">
                <span className='input-group-text' id='basic-addon1'>Cargo</span>
                <input className='form-control' placeholder="Cargo del empleado" type="text" onChange={(event) => { setPosition(event.target.value) }} />
            </div>
            <div className="input-group mb-3">
                <span className='input-group-text' id='basic-addon1'>Años</span>
                <input className='form-control' placeholder="Años de experiencia del empleado" type="Number" onChange={(event) => { setYears(event.target.value) }} />
            </div>
            <button className='btn btn-success' onClick={addEmployee}>Registrar</button>
        </>
    );
}

export default EmployeeForm;
