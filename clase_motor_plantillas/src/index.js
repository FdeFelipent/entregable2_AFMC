import express from "express";
import handlebars from "express-handlebars";
import path from "node:path";
import { __dirname } from "./util.js";
 
const app = express();
const port = 3000;

app.engine("handlebars", handlebars.engine());
app.set("views",__dirname+"/views");
app.set("view engine", "handlebars")
app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {
    const lessons = [
        {name: "Mostrar datos", example: "{{username}}", description: "Inserta en el HTML un valor enviado desde Express."},
        {name: "Usar condiciones", example: "{{#if mostrarGuia}}", description: "Decide qué contenido mostrar según un valor."},
        {name: "Recorrer listas", example: "{{#each lessons}}", description: "Repite el mismo bloque para cada elemento de una lista."}
    ]
    res.render("index",{
    title:"Mi guía de Handlebars",
    username:"estudiante",
    mostrarGuia: true,
    lessons
  })
})

app.get('/contact', (req, res) => {
  res.render("contact",{
    title:"Contacto | Mi guía de Handlebars",
    dato:"Guía de estudiante"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})