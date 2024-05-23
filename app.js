const express = require('express');
const { home } = require('./controllers');
const app = express()
const port = 3000


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", home);
app.get("/doctors", );
app.get("/doctors/:id", );
app.get("/", );
app.get("/", );
app.get("/", );
app.get("/", );

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})