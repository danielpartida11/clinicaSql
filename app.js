//-------------------------------------------REQUIRES-----------------------------------------------------------
const { static } = require('express');
const express = require ('express');

const clientRouter = require('./routes/clientRouter');
const clinicRouter = require('./routes/clinicRouter');
const appointmentRouter = require('./routes/appointmentRouter')

const mysql = require ('mysql2/promise');
//-----------------------------------------REQUIRES-------------------------------------------------------------

//--------------------------------------------PORT--------------------------------------------------------------
const app = express();

const PORT = process.env.PORT || 3003;
//----------------------------------------------------PORT------------------------------------------------------

//--------------------------------------CONEXION CON LA BBDD----------------------------------------------------
const connect = mysql.createConnection({

    host: '127.0.0.1',
    user: 'root',
    database: 'clinicaSql',
    password: '1234'
})
//-----------------------------------------CONEXION CON LA BBDD-------------------------------------------------

//--------------------------------------------ENRUTAMINETO------------------------------------------------------
app.use(express.json());

app.use(function(req, res, next) { //para evitar el error CORS
    res.header("Access-Control-Allow-Origin", "*"); //permite hacer peticiones desde todos los orígenes
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); //permite peticiones con las cabeceras enumeradas
    // res.header("Access-Control-Allow-Methods", "GET, POST");
    next();
});

app.use('/', clientRouter);

app.use('/', clinicRouter);

app.use('/', appointmentRouter);

app.get('/', (req, res) => {res.send('Prueba Realizada!')})
//--------------------------------------------ENRUTAMINETO-------------------------------------------------------

//-------------------------------------------LISTENER------------------------------------------------------------
app.listen(PORT, () => console.log(`Servidor Levantado en el Puerto ${PORT}`));
//----------------------------------------LISTENER---------------------------------------------------------------