const express = require("express");
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database: 'db_universidad'
});

connection.connect((err)=>{
    if (err){
        console.error('Error de conexion:' ,err);
        return;
    }
    console.log('Conectado a la base de datos')
});

//Query
connection.query('SELECT a.ID_Alumno, a.Nombre, a.Apellido,a.Edad, a.Email, c.calificacion, m.materia, carr.carrera FROM tbl_calificaciones c '+
'INNER JOIN tbl_alumno a ON c.ID_alumno = a.ID_Alumno INNER JOIN tbl_materia m ON c.ID_materia = m.ID_materia INNER JOIN tbl_carrera carr '+
'ON a.ID_Carrera = carr.ID_Carrera;', (err,rows)=>{
    if(err){
        console.error('Error al realizar la consulta:', err);
        return;
    }
    console.log('Resultados:',rows);
});

//Rutas (Request,Response)
app.get('/',function(req,res){
    res.send('Inicializo correctamente')
});

app.get('/alumnos',function(req,res){
    res.json({
        "nombre": "De los Santos",
        "Carrera": "Ing.Software"
    });
});

const port = 3000;
app.listen(port,()=>{
    console.log("El servidor escucha en el puerto " + port)
});

app.get('/Get',function(req,res){
    res.send('Servidor Corriendo')
});

app.post('/Post',function(req,res){
    res.send('Servidor Corriendo')
});

app.post("/Alumno",function(req,res){
    res.json(
        {"nombre":"Jorge","Apellido":"De los Santos", "Matricula":"202200451", "Carrera":"Ing.Software"}
    );
});

app.post("/Producto",function(req,res){
    res.json([
        {"nombreproducto":"Shampoo","cantidad":"10","Precio":"80.00"},
        {"nombreproducto":"Sal","cantidad":"100","Precio":"50.00"},
        {"nombreproducto":"Papas","cantidad":"1","Precio":"20.00"},
    ]
    );
});

app.post("/Metodos",function(req,res){
    res.json([
        {"nombre":"Get","Descripcion":"Solicita una representacion de un recurso especifico"},
        {"nombre":"Post","Descripcion":"Se utiliza para enviar una entidad o un recurso especifico"},
        {"nombre":"Put","Descripcion":"Es utilizado para aplicar modificaciones parciales a un recurso"},
        {"nombre":"Delete","Descripcion":"Borra un recurso especifico"},
    ]
    );
});

