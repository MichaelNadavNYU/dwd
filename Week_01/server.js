let http = require("http");
let fs = require("fs");
let myServer = http.createServer(myRequestHandler);

myServer.listen(8080);

function myRequestHandler(req, res) {
  //this function will respond to incoming requests
  let path = req.url;
  console.log("Incoming request", req.url);
  let filePath = __dirname + path;
  console.log("client requesting a file at ", filePath);

  fs.readFile(filePath, function (err, data) {
    // check for errors before sending data
    if (err) {
      console.log("Error getting data! Sending Error status code");
      res.writeHead(500);
      res.end("Error accessing file!");
      return;
    }

    console.log("Got data! Let's send it to the client.");
    res.writeHead(200);
    res.end(data);
  });
}

//fs.readFile(__dirname);

//function myRequestHandler(req, res){
// let incomingUrl = new URL ("http://" + req.headers.host);
// console.log(incomingUrl);

// let requestPath = incomingUrl.pathname;
//fs.readfile(__dirname + request path,
//Callback function for reading the local files
//function (err, data){

//check for any errors
//if (err){
// res.writeHead(500); // 500 is an error status code

// // return res.end('Error loading ' + requestPath);
// // }

// // Otherwise, send the data, the contents of the file
// res.writeHead(200);
// res.end(data);

// // }
// // );
