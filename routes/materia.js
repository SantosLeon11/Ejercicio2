const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

//conexión con la base de datos
const {connection} = require("../config/config.db");

const getMateria = (request, response) => {
    connection.query("SELECT * FROM tbl_materia", 
    (error, results) => {
        if(error)
            throw error;
        response.status(200).json(results);
    });
};
//ruta
app.route("/materia").get(getMateria);
module.exports = app;