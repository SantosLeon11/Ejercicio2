const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

//conexion con la base de datos

const {connection} = require("../config/config.db");
const getAlumno = (request,response) => {
    connection.query("SELECT * FROM tbl_alumno",
    (error,results)=>{
        if(error)
        throw error;
    response.status(200).json(results);

    });
};

/*aqui va mi primer post*/
const postAlumno = (request,response) => {
    const {carrera,nombre,apellido,edad,email,estado} = request.body;
    console.log(action); return false;
    if(action == "insert"){
        connection.query("INSERT INTO tbl_alumno (FK_Carrera,Nombre,Apellido,Edad,Email,Estado) VALUES(?,?,?,?,?,?)",
        [carrera,nombre,apellido,edad,email,estado],
        (error,results) => {
            if(error)
            throw error;
        response.status(201).json({"Alumno correctamente agregado": results.affectedRows});
    });
    }
    else{
        //console.log(action); return false;
        const id = id;
        connection.query("UPDATE tbl_alumno SET FK_Carrera = ?, Nombre = ?, Apellido = ?, Edad = ?, Email = ?, Estado = ? WHERE ID_Alumno = ?)",
        [Carrera,nombre, apellido, edad, email, estado, id],
        (error,results) => {
            if(error)
            throw error;
        response.status(201).json({"Alumno correctamente editado": results.affectedRows});
    });
}
};
    
app.route("/alumnos").post(postAlumno);

//Servicio para eliminar un alumno
const delAlumno = (request,response)=>{
    const id = request.params.id;
    //console.log(id); return false;
    connection.query("DELETE FROM tbl_alumno WHERE ID_Alumno = ?",
    [id],
    (error, results) => {
        if(error)
        throw error;
    response.status(201).json({"Alumno eliminado":results.affectedRows});
    });
};
app.route("/alumnos/:id").delete(delAlumno);

//Ruta
app.route("/alumnos").get(getAlumno);
module.exports = app;