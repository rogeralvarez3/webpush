const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
    res.send(`<h1>SERVIDOR SEGURO OK!!!</h1>`)
})

const fs = require("fs");

const https = require("https");
const credentials = {
  key: fs.readFileSync("./credenciales/key.pem"),
  cert: fs.readFileSync("./credenciales/cert.pem"),
};
let httpsServer = https.createServer(credentials, app);

httpsServer.listen(8443, () => {
  console.log("Listo!!!, el servidor está ejecutándose en el puerto 8443");
});
