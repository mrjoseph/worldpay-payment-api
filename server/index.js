const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
const _ = require('lodash');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

const payments = {
  "_links": {
    "resourceTree": {
      "href": "https://localhost:2000/payments/resourceTree"
    },
    "payments:authorize": {
      "href": "https://localhost:2000/payments/authorizations"
    },
    "payments:events": {
      "href": "https://localhost:2000/payments/events"
    },
    "curies": [
      {
        "name": "payments",
        "href": "https://localhost:2000/rels/payments/{rel}",
        "templated": true
      }
    ]
  }
}
app.get('/api/payments', (req,res) => {
  res.json({
    data: payments,
    status: 201
  })
});


app.listen('2000', () => {
  console.log('listening on port 20000');
});
