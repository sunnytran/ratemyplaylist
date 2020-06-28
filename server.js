
var express = require('express');
var request = require('request');

let app = express()
require('dotenv').config()

var client_id = process.env.CLIENT_ID; // Your client id
var client_secret = process.env.CLIENT_SECRET; // Your secret

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

app.get('/api/token', function(req, res) {
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };
  
  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var token = body.access_token;
      res.send({"access_token": token});
    }
  });
})

let port = process.env.PORT || 5000
console.log(`Listening on port ${port}. Go /login to initiate authentication flow.`)
app.listen(port)

    // var options = {
    //   url: 'https://api.spotify.com/v1/playlists/08ZBip1gxb97iNoHjFEBYh?si=4FItiYNDQleAORxlfKg-dQ/tracks',
    //   headers: {
    //     'Authorization': 'Bearer ' + token
    //   },
    //   json: true
    // };

    // request.get(options, function(error, response, body) {
    //   console.log(body.tracks.next);
    //   x = body.tracks.next;

      // var total = body.tracks.total;
      // limit = 5;
      // // var limit = body.tracks.limit;
      // if (total > limit) {
      //   console.log("PAGINATE")
      // }
    // });
