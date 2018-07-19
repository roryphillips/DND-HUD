const fs = require('fs');
const http = require('http');
const path = require('path');

const app = http.createServer(handler);
const io = require('socket.io')(app);
const mapEvents = require('./events/mapEvents');

function handler(req, res) {
    let filePath = './public' + req.url;
     if (filePath === './public/')
        filePath = './public/index.html';

    const extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            return res.end('Could not load index.html');
        }

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
}

const port = process.env.IO_PORT || 4001;
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