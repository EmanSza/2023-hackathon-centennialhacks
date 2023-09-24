if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const MongoStore = require('connect-mongo');
const initalizePassport = require('./utils/passport-config');
const flash = require('express-flash');

const app = express();

// Database
const database = require('./utils/database');
const db = new database(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db.connect()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());

app.use(cors())


app.use(cookieParser(process.env.SESSION_SECRET));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
  store: MongoStore.create({ 
      mongoUrl: process.env.MONGO_URI,
      collectionName: 'sessions'
   }),
}));

initalizePassport(
  passport,
  email => {
      return userSchema.findById(email)
  }
);

app.use(passport.initialize());
app.use(passport.session());
// routeDirectory(app);

app.use('/', require('./routes/index'));

// Consumer Routes
app.use('/consumer', require('./routes/consumer/index'));
app.use('/consumer/auth/login', require('./routes/consumer/auth/login'));
app.use('/consumer/auth/register', require('./routes/consumer/auth/register'));
app.use('/consumer/user', require('./routes/consumer/user'))

// Employee Routes
app.use('/employee', require('./routes/employee/index'));
app.use('/employee/auth/login', require('./routes/employee/auth/login'));
app.use('/employee/auth/register', require('./routes/employee/auth/register'));


app.listen(4000, () => {
  console.log("Server has started!");
});