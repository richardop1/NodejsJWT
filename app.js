const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get("/api", function(req,res) {
    res.json({
        mensaje: "Nodejs con JWT"
    });
});

app.listen(3000, function() {
    console.log("node corriendo en el puerto 3000");
});