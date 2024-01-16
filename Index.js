const express = require("express");
const app = express();

//Rutas (Request,Response)
app.get('/',function(req,res){
    res.send('Mi primera ruta funciona 25AM')
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
})