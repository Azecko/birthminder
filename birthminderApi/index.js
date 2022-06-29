const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

let rawbirthdays = fs.readFileSync('birthdays.json');
let birthdays = JSON.parse(rawbirthdays);

app.get('/getBirthdays', (req, res) => {
    res.send(birthdays);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});