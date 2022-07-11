function log(string){
    var value = document.getElementById(`console`).innerHTML
    var date = new Date()
    var hour = parseInt(date.getHours())
    if(hour > 12){ hour = hour - 12}
    document.getElementById(`console`).innerHTML = value + `[${date.getHours()}:${hour}:${date.getSeconds()}] » <i>${string}</i><br>`
}

var http = require('http')

const requestListener = function (req, res) {

    res.setHeader("Content-Type", "application/json");

    let str = []

    req.on('data', chunk => {
        str.push(chunk)
      });
      req.on('end', () => {
        try{
          log(JSON.parse(str).name + ` › ` + JSON.parse(str).message)
        }catch{
          res.end(`{"message": "Expected Message"}`)
        }
        
      });
    

    
  }
var host = 'localhost';
var port = 8000

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    log(`Server is running on http://${host}:${port}!`);
});


