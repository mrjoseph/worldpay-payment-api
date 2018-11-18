const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

const payments = {
  "_links": {
    "resourceTree": {
      "href": "http://localhost:2000/api/payments/resourceTree"
    },
    "payments:authorize": {
      "href": "http://localhost:2000/api/payments/authorizations"
    },
    "payments:events": {
      "href": "http://localhost:2000/api/payments/events"
    },
    "curies": [
      {
        "name": "payments",
        "href": "http://localhost:2000/api/rels/payments/{rel}",
        "templated": true
      }
    ]
  }
};
const authorized = {
  "outcome": "authorized",
  "_links": {
    "payments:cancel": {
      "href": "http://localhost:2000/api/payments/authorizations/cancellations/eyJrIjoiazNhYjYzMiJ9"
    },
    "payments:settle": {
      "href": "http://localhost:2000/api/payments/settlements/full/eyJrIjoiazNhYjYzMiJ9"
    },
    "payments:partialSettle": {
      "href": "http://localhost:2000/api/payments/settlements/partials/eyJrIjoiazNhYjYzMiJ9"
    },
    "payments:events": {
      "href": "http://localhost:2000/api/payments/events/eyJrIjoiazNhYjYzMiJ9"
    },
    "curies": [
      {
        "name": "payments",
        "href": "http://localhost:2000/api/rels/payments/{rel}",
        "templated": true
      }
    ]
  }
};



app.get('/api/payments', (req,res) => {
  res.status(201).send({
    data: payments,

  })
});

app.post('/api/payments/authorizations', (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  res.status(201).send(authorized);
});

app.post('/api/payments/settlements/full/eyJrIjoiazNhYjYzMiJ9', (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  res.status(201).send({
    "_links": {
      "payments:refund": {
        "href": "http://localhost:2000/api/payments/settlements/refunds/full/eyJrIjoiazNhYjYzMiJ9"
      },
      "payments:partialRefund": {
        "href": "http://localhost:2000/api/payments/settlements/refunds/partials/eyJrIjoiazNhYjYzMiJ9"
      },
      "payments:events": {
        "href": "http://localhost:2000/api/payments/events/eyJrIjoiazNhYjYzMiJ9"
      },
      "curies": [
        {
          "name": "payments",
          "href": "http://localhost:2000/api/rels/payments/{rel}",
          "templated": true
        }
      ]
    }
  });
});

// Catch all 404 errors
app.use(function (req, res, next) {
  console.log('error');
  res.status(404).send({error: "Sorry can't find that!"})
});

app.listen('2000', () => {
  console.log('listening on port 20000');
});
