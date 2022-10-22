const Category = require('../../models/category')

const routes= function(app){
    app.get("/category",(req,res)=>{
        try{

        }
        catch(err){
            res.send("server error occurs")
        }
    })
}
module.exports = routes;