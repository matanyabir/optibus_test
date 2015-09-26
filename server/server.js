var http = require('http');

http.createServer(onRequest).listen(3000);

function onRequest(client_req, client_res) {
    console.log('serve: ' + client_req.url);


    var options = {
        hostname: 'ec2-52-18-187-100.eu-west-1.compute.amazonaws.com',
        port: 2503,
        //path: '',
        method: 'GET'
    };

    var proxy = http.request(options, function (res) {
        res.pipe(client_res, {
            end: true
        });
    });

    client_req.pipe(proxy, {
        end: true
    });


    client_res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    });
    //client_res.header("Access-Control-Allow-Origin", "*");
    //client_res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

}