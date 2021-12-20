/**
 * GITHUB: https://github.com/mellambias/ej4
 */

const express = require('express');
const path = require('path');
const app = express();

const PORT = 5000;

const productos=[
    {nombre:"producto 1",precio:100},
    {nombre:"producto 2",precio:200},
    {nombre:"producto 3",precio:300},
    {nombre:"producto 4",precio:400},
    {nombre:"producto 5",precio:500},
    {nombre:"producto 6",precio:600},
    {nombre:"producto 7",precio:700},
    {nombre:"producto 8",precio:800},
    {nombre:"producto 9",precio:900},
    {nombre:"producto 10",precio:1000},
];

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index",{titulo:"Home"});
});


app.get("/products",(req,res)=>{
    res.render("productos",{titulo:"Productos",productos});
});

app.use((req,res)=>{
    res.render("404",{titulo:"404"});
})


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
}).on('error', (err) => {
    console.error(`No se pudo levantar el servidor en el puerto ${PORT}`);
});
