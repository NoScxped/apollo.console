function log(string){
    var value = document.getElementById(`console`).innerHTML
    var date = new Date()
    var hour = parseInt(date.getHours())
    if(hour > 12){ hour = hour - 12}
    document.getElementById(`console`).innerHTML = value + `[${date.getHours()}:${hour}:${date.getSeconds()}] » <i>${string}</i><br>`
}

var http = require('http')

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
  }

var port = 8080
const server = http.createServer(requestListener);
server.listen(port);

log(`Server Running on port ` + port + "!")
