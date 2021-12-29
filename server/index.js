import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: '30mb',extended: true })); // support json encoded bodies
app.use(bodyParser.urlencoded({ limit: '30mb',extended: true })); // support encoded bodies
app.use(cors()); // cors middleware sirve para permitir peticiones de otros dominios

// https://www.mongodb.com/cloud/atlas

const CONNECTION_URL = "mongodb+srv://tomy_anas:Hondacrvz1@cluster0.wy6w0.mongodb.net/memoriesDb?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000; // aca seteamos el puerto en el que va a correr el server

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}) // conexion a la base de datos
.then(() => app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))) // escucha en el puerto
.catch(err => console.log(err)); // error en la conexion





