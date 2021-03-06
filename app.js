var express = require("express");
var mongoose = require('mongoose');
const routes = require("./routes")
const bodyParser = require('body-parser');
var app = express();
app.use(express.static(process.cwd()+"/UI/dist/loanwolfui/"));
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'DELETE, PUT, POST, GET');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	if ('OPTIONS' == req.method) {
	   res.sendStatus(200);
	 }
	 else {
	   next();
	 }});

app.get('/', (req,res) => {
		res.sendFile(process.cwd()+"/UI/dist/loanwolfui/index.html")
});

app.get('/home', (req,res) => {
	res.sendFile(process.cwd()+"/UI/dist/loanwolfui/index.html")
});


mongoose
	.connect("mongodb://localhost:27017/users-data", { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
        app.use(bodyParser.json());
        app.use("/api", routes)

		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})

