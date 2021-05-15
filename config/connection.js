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