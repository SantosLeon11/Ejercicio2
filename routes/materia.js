const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

//conexion con la base de datos

const {connection} = require("../config/config.db");
const getMateria = (request,response) => {
    connection.query("SELECT * FROM tbl_materia",
    (error,results)=>{
        if(error)
        throw error;
    response.status(200).json(results);

    });
};

/*aqui va mi primer post*/
const postMateria = (request,response) => {
    const {Materia, Cuatrimestre} = request.body;
    connection.query("INSERT INTO tbl_materia (Materia, Cuatrimestre) VALUES(?,?)",
    [Materia, Cuatrimestre],
    (error,results) => {
        if(error)
        throw error;
    response.status(201).json({"Materia agregada": results.affectedRows});
    });
};
app.route("/materia").post(postMateria);

//Ruta
app.route("/materia").get(getMateria);
module.exports = app;