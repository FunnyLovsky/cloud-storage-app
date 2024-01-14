const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
})

const start = () => {
    try {
        app.listen(5000, () => console.log('server start on port', 5000))
    } catch (error) {
        console.log(error)
    }
}

start();