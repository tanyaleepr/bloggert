const express = require("express");
const app = express();

const path = require("path");


const sequelize = require("./config/connection");

// handlebars 
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });
app.set("view engine", "handlebars");
app.engine("handlebars", hbs.engine);

// cookies
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ db: sequelize }),
};

// sessions
app.use(session({
secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));


//the middle
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));



// routes
app.use(require("./controllers/index"));

// db and server
const PORT = process.env.PORT || 3001;
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
});