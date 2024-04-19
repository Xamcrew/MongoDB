var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sp22bscs0031:Sami123@samidatabase.ptg6t3f.mongodb.net/?retryWrites=true&w=majority&appName=SamiDatabase";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Sami_CRUD");
  dbo.collection("Students").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});