let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let mcache = require("memory-cache");
let mysql = require('mysql');

let server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(bodyParser.raw());
server.use(cors());

const connectionString = "";

// Confirm the server is listening on the requested port
server.listen(3001, function () {
  console.log("This confirms the server is running")
});

// Establish Database Conenection
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'qsczseqsczseQ@',
  database: 'historicalData'
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


// Whitelist requests from other ports to this domain
var whitelist = ['http://localhost:3000'];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

server.use(cors(corsOptions));

// We are going to cache the url (e.g request 1 data/aapl, request 2 data/snap)
var storeCache = (data, req, res, next) => {
  
  const key = mcache.get(url); 
  if(!(key===null || key===undefined))
  {
    mcache.put(key, url);
    return;
  } 
  else
  {
      res.send(key, data);
  }

  next();
}
// Redirect the page (no url avvailable as of yet) 
server.use('/data/:stock/', async function (req, res, next) {
  var url = req.url || req.originalUrl;
  console.log(req.url + " "  + req.originalUrl);
  var data = ""; // Query
  storeCache(data, req, res, next);

  // res.redirect('/');
});

// Generate and store data in database
server.post('/generateNumber', async function (req, res) {
  try {
    if (!req.body || req.body === undefined)
      return res.sendStatus(400);

    let key = JSON.stringify(req.body, null, 2);
    let obj = JSON.parse(key);
    const number = obj.number;
    const time = obj.time;

    // Connect to database
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("randomNumbers");
      var myobj = { time: time, number: number };
      dbo.collection("record").insertOne(myobj, function (err, res) {
        if (err) throw err;
        db.close();
      });
    });

    res.sendStatus(200);
  }
  catch (ex) {
    res.sendStatus(400);
  }
});