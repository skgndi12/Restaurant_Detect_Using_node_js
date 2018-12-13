const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 9000 });
var request = require('request');
var client_id = 'jffzbdZdEiV5KGFerxOR';
var client_secret = 'jI15Fohs8P';

var api_url = 'https://openapi.naver.com/v1/search/local.json?display=5&query=';
var options = {
    headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
};

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    msg = encodeURI(message);
    console.log('received: %s', decodeURI(msg));
    options.url = api_url + msg;

    request.get(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        ws.send(JSON.stringify(JSON.parse(body).items.map(x => {
          return {
              title: x.title
              , mapx: x.mapx
              , mapy: x.mapy
              , address : x.address
              , telephone : x.telephone
            }
          })))
      } else {
        console.log("d");
        console.l
        // console.log('error = ' + response.statusCode);
      }
    });
  });
});