const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//conexion a mongoDB local
mongoose.connect('mongodb://localhost:27017/DM');
//definir esquema
const clienteSchema = new mongoose.Schema({
    nombre: String,
    correo: String,
    mensaje: String,
    fecha: {type: Date, default: Date.now}

});
const Cliente = mongoose.model("clientes", clienteSchema);
//Ruta para guardar datos
app.post("/guardar", async (req, res)=> {
    const nuevoContacto = new Cliente({
        nombre: req.body.nombre,
        correo: req.body.correo,
        mensaje: req.body.mensaje
    });
    await nuevoContacto.save();
    res.send("Datos guardados correctamente en MongoDB");
});

//iniciar servidor
app.listen(3000, () =>{
    console.log("Servidor corriendo en http://localhost:3000");
});

