const app = require('http').createServer(handler);
const io = require('socket.io')(app);
const fs = require('fs');

function handler(req, res) {
    fs.readFile(__dirname + '/public/index.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            return res.end('Could not load index.html');
        }

        res.writeHead(200);
        res.end(data);
    });
}

const port = process.env.IO_PORT || 4000;
app.listen(port, () => {
    console.log(`Backend is up and running on port ${port}`);
});

const connections = [];
io.on('connection', (socket) => {
    console.log(`New Connection: ${socket.id}`);
    connections.push(socket);
    socket.on('disconnect', () => {
        console.log(`Disconnected: ${socket.id}`);
    });

    socket.emit('welcome', {message: 'Hello from the server side'});

    socket.on('welcome-ack', (data) => {
        console.log(JSON.stringify(data));
    });
});