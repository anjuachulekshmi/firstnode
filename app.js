const Express=require("express")
const Mongoose=require("mongoose")
const Bodyparser=require("body-parser")
var app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())
var regModel=Mongoose.model("registers",new Mongoose.Schema(
    {
       name :String,
       age  :String,
       place :String
    }
)
)
Mongoose.connect("mongodb+srv://anju:anju@cluster0.q3gom.mongodb.net/Regdb")
app.get("/api/addreg",(req,res)=>
    {
        console.log("hello")
        res.send("hello")
    }

)
app.listen(4800,()=>{
    console.log("server running")
})
