const path = require('path');

const jsdom = require('jsdom');

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const server = require('http').Server(app);

const io = require('socket.io').listen(server);

let PL=[];



app.use(express.static(__dirname + '/'));
 
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {

     
    // socket.emit('id',socket.id);

    socket.on("mouvements",(data)=>{

      let client_pl = {
        "id":data.id,
        "x":data.x,
        "y":data.y
      }
     
      // socket.emit('joueurs', JSON.stringify(PL));

      socket.broadcast.emit("pos",client_pl);

      // socket.broadcast.emit('new_pl_mov',client_pl);

    })
   


})

server.listen(3000, function () {
    console.log(`Listening on ${server.address().port}`);
  });