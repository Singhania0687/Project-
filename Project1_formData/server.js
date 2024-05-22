const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Create a connection to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abhi0687', // Replace with your MySQL password
    database: 'FormData'  // Replace with your MySQL database name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database, ready to accept requests<h1> JAi shree ram</h1>"');
});

// Endpoint to store form data
app.post('/submit', (req, res) => {
    const { name, email, password } = req.body;
    const query = 'INSERT INTO classVI (name, email, password) VALUES (?, ?, ?)';

    db.query(query, [name, email, password], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('Data inserted successfully');
    });
});
app.get('/getdata', (req, res) => {
    const query = 'SELECT * FROM classVI';

    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err)
                  }
        res.send(result);
                                 })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
