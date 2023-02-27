// DEPLOIEMENT DU SITE VIA HEROKU
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// lien de la page html avec css et js
app.use(express.static("mainPage"));
app.use(bodyParser.urlencoded({extended: true}));

// Voir le fichier html
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/mainPage/portofolio.html");
})

// Port Server 3000
app.listen(3000, function () {
    console.log("My files is reside on port server 3000");
})

// SWIPER
