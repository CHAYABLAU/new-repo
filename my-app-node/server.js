const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose")
const app = express();
const dotenv = require('dotenv');
const router = require("./app/routes/user.routes")
dotenv.config();

var corsOptions = {
  origin: "http://localhost:3000"
};

const connectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {

        console.log("connected to db")
    })
    .catch((err) => {
        console.log(`error connected${err}`);
    });

app.use(cors(corsOptions));
// app.use(function(req, res, next) {
//   res.header(
//     "Access-Control-Allow-Headers",
//     "x-access-token, Origin, Content-Type, Accept"
//   );
//   next();})

app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router)


const PORT = process.env.PORT || 8081 ;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();})