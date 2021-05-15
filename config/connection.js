const mongoClient = require('mongodb').MongoClient;
const state={
    db:null
}
module.exports.connect=function(done){
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbname = 'mobilezone';

mongoClient.connect(url,(err,data)=>{
    if (err) return done(err)
    state.db=data.db(dbname)
  
})
done()
}
//for availabilty

module.exports.get=function(){
    return state.db
}

// inthe case when use the express then 
// goto app.js and require the file from here
// then call the function

// example

var db=require('./config/connection');

db.connect()



// videofrom crossroads webdevelopment challenge part 17 ,minitus: ~5:00