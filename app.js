const express = require('express');
const { home, getRegister, postRegister, getLogin, postLogin, showDoctors } = require('./controllers');
const app = express()
const session = require('express-session');
const port = 3000


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'kelompok dua',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, sameSite: true }
}))

app.get("/register", getRegister);
app.post("/register", postRegister);
app.get("/login", getLogin);
app.post("/login", postLogin);

app.use((req, res, next) => {
  if (!req.session.userId) {
    const error = 'Please login first';
    res.redirect(`/login?error=${error}`);
  } else {
    next()
  }
})

app.get("/", home);
app.get("/doctors", showDoctors);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})