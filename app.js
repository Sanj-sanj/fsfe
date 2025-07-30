const http = require('http');

const messageFromHost = "Were dev-ing now :-)"
http.createServer(function (req, res) {
	res.write("On the way to becoming a fullstack engineer!!" + "\n" + messageFromHost) ;
	res.end();
}
).listen(3000);

console.log("Server started on port 3000")
