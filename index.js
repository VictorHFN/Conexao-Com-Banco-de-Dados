const express = require("express");
const { User } = require("./app/models");
const app = express();

const bodyParser = require("body-parser");

app.use(express.urlencoded({extended: false}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });

app.get("/", (req, res) => {
    res.send("Aloo Mundo!");
});

app.listen(3535);