var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var PORT = process.env.PORT || 3000;
var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.use("/updateone", routes);
app.use("/insertone", routes);


app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
