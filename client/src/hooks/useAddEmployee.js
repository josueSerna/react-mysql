import { useState } from 'react';
import Axios from 'axios';


const useAddEmployee = (refreshEmployees) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [years, setYears] = useState(0);

    const addEmployee = () => {
        Axios.post("http://localhost:3001/create", {
            name: name,
            age: age,
            country: country,
            position: position,
            years: years
        }).then(() => {
            refreshEmployees();
        });
    };

    return {
        setName,
        setAge,
        setCountry,
        setPosition,
        setYears,
        addEmployee
    }
}

export default useAddEmployee
