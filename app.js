
let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);
// const msg = require('./model/message')
let socketIO = require('socket.io');
let io = socketIO(server);

app.use(express.static('public'))

// require('./data/database')



io.on('connection', (socket) =>{

    console.log('new connection made');

    socket.on('join', (data)=>{

        socket.join(data.room);
        console.log(data.user + 'joined the room:' + data.room);

        socket.broadcast.to(data.room).emit('new user joined',{user:data.user,message:'has joined this room'})
        // msg.create({user:data.user,room:data.room},(err,data) =>{
        //     if (err) { return err}
        //     else{ return data}
        // })
        
    })
    socket.on('leave', function(data){

        socket.join(data.room);
        console.log(data.user + 'left the room:' + data.room);

        socket.broadcast.to(data.room).emit('left room',{user:data.user,message:'has left this room'})

        socket.leave(data.room)
        
    })

    socket.on('message',function(data){

        io.in(data.room).emit('new message',{user:data.user,message:data.message})
    })
    
})

server.listen(3000, () => {
    console.log(`started on port: 3000`);
});