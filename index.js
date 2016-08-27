var express = require('express');
var app = express();
app.use(require('body-parser')());
app.use(require('method-override')());//para magamit yung put and delete na http method
app.use(require(__dirname+'/config/router')(express.Router()));
app.use('/', express.static(__dirname+'/public'));

app.listen(3000, function(){
	console.log("Web server is running at port 3000");
});
