const mongoose = require("mongoose")
const conn_str = "mongodb+srv://root:root@cluster0.rfjps.mongodb.net/tcet?retryWrites=true&w=majority "
mongoose.connect(conn_str, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then (()=>{
    console.log("Connected successfully");
}).catch((err)=>{
    console.log(err);
})

const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    city:String
});
const user = new mongoose.model("student", userSchema);
module.exports = user;