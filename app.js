const express = require('express');
const { home, showDoctors, showDoctorById } = require('./controllers');
const app = express()
const port = 3000


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", home);
app.get("/doctors", showDoctors);
app.get("/doctors/:id", showDoctorById);
app.get("/", );
app.get("/", );
app.get("/", );
app.get("/", );

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})