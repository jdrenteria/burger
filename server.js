var express= require("express");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended:true}));
app.use(express.json());

var expresshandlebars = require("express-handlebars");

app.engine("handlebars", expresshandlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgerControllers.js");

app.use(routes);

app.listen(PORT,function(){
    console.log("App is working on port:%s", PORT);
})

