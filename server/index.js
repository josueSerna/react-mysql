const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Crear un pool de conexiones
const db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "employees"
});

// Verificar la conexión al iniciar el servidor
db.getConnection((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL");
});


app.post("/create", (req, res) => {
    const { name, age, country, position, years } = req.body;

    const sqlInsert = 'INSERT INTO employees (name, age, country, position, years) VALUES (?, ?, ?, ?, ?)';
    const values = [name, age, country, position, years];


    
    db.query(sqlInsert, values, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error registering employe");
        } else {
            res.send("Employee successfully registered");
        }
    });
});

app.get("/employees", (req, res) => {
    db.query('SELECT * FROM employees', 
        (err, result) =>{
        if(err){
            console.log(err);
        }else {
            res.send(result)
        }
    }
)

}
);

app.listen(3001, () => {
    console.log("Server running on port 3001");
});

