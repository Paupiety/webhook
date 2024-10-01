const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//variables pour websocket
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'public/index.html');
})

app.post("/api/gitlab", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.listen(3000, () => {
  console.log("listenning on 3000");
});

