//-------------------------------------------REQUIRES-----------------------------------------------------------
const { static } = require('express');
const express = require ('express');

const mysql = require ('mysql2/promise');
//-----------------------------------------REQUIRES-------------------------------------------------------------

//--------------------------------------------PORT--------------------------------------------------------------
const app = express();

const PORT = 3000;
//----------------------------------------------------PORT------------------------------------------------------

//--------------------------------------CONEXION CON LA BBDD----------------------------------------------------
const connect = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    database: 'clinicaSql',
    password: '1234'
})
//-----------------------------------------CONEXION CON LA BBDD-------------------------------------------------
app.use(express.json());

app.use(function(req, res, next) { //para evitar el error CORS
    res.header("Access-Control-Allow-Origin", "*"); //permite hacer peticiones desde todos los orígenes
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); //permite peticiones con las cabeceras enumeradas
    // res.header("Access-Control-Allow-Methods", "GET, POST");
    next();
});
//-------------------------------------------LISTENER--------------------------------------------------
app.listen(3000, () => console.log('Servidor Levantado en el Puerto 3000'));
//----------------------------------------LISTENER-----------------------------------------------------

