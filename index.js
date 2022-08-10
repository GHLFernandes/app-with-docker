const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'db', // docker-compose.yml  (nome do serviço)
    user: 'root',
    password: 'root',
    database: 'mydb'
});

connection.connect();

const app = express();

app.get('/', (req, res) => {
    res.send('E ai Monoball!!!');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Server listening on port', port);
});