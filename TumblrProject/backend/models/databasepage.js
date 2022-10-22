const mongoose = require('mongoose')


//CategorySchema is the model of the fileds in the table
const databaseSchema = new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    message:{type:String,required:true,unique:true},
    hashtag:{type:String,required:true,unique:true},
    // img:{type:String,required:true},
    created_at:{ type:Date, default: Date.now }
})


const database = mongoose.model('database', databaseSchema)
                                //categories here is the name of the table in the database
                                //CategorySchema is the fields in the table

module.exports = database;