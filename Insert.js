var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sp22bscs0031:Sami123@samidatabase.ptg6t3f.mongodb.net/?retryWrites=true&w=majority&appName=SamiDatabase";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});