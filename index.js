const express = require('express');
const app = express();

const port = 3000;


// Set EJS as the templating engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("home.ejs");
});


app.listen(port, () => {
  console.log(`EJS app listening at http://localhost:${port}`);
});