var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sp22bscs0031:Sami123@samidatabase.ptg6t3f.mongodb.net/?retryWrites=true&w=majority&appName=SamiDatabase";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: 'Mountain 21' };
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});