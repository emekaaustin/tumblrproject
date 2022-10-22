const database  = require('../../models/databasepage');
const app = require('../routeindex');

const routes  = function(app){

        app.post("/post",(req,res)=>{
            console.log("inside post function")
                const data = new database({
                    title:req.body.title,
                    message:req.body.message,
                    hashtag:req.body.hashtag
                });
                
                const val = data.save();
                res.send("posted")
        });

}
module.exports = routes