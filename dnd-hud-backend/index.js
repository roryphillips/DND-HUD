const fs = require('fs');
const app = require('http').createServer(handler);
const io = require('socket.io')(app);
const mapEvents = require('./events/mapEvents');

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

const store = {
    state: {},
    setState(state) {
        this.state = state;
    },
    getState() {
        return this.state;
    }
};

io.on('connection', (socket) => {
    mapEvents(socket, store);
});