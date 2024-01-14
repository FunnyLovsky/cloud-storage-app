const express = require('express');
const path = require('path')

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
})

const start = () => {
    try {
        app.listen(PORT, () => console.log('server start on port', PORT))
    } catch (error) {
        console.log(error)
    }
}

start();