const express = require('express');
const app = express();
const path = require('path');

const port = 3000;


// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set("views",pathjoin(__dirname,"/views"));


app.get('/', (req, res) => {
    res.render("home.ejs");
});

app.get('/about', (req, res) => {
    res.send("hello about page");
});

app.listen(port, () => {
  console.log(`EJS app listening at http://localhost:${port}`);
});