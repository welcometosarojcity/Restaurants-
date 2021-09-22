const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./Routes/index');

const host = 'localhost';
const port = 8722;

const app = express();

app.use(cors());
app.options('*',cors());
app.use(express.json());
app.use('/', routes);

mongoose.connect('mongodb+srv://jeeth:jeeth@cluster0.8on12.mongodb.net/TestJp',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        app.listen(port, host, () => {
            console.log(`Server is running at ${host}:${port}`);
        });
    })
    .catch(err => console.log(err))

