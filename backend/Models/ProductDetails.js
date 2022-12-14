const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://aritry123:AritryMongo10@cluster0.h0xjooq.mongodb.net/?retryWrites=true&w=majority").then((res)=>console.log("Connected to db product!")).catch((e)=>console.log("Error in connection: ",e))
const productModel=mongoose.model("FinalProductCollection",{
    img:{
        type:Array,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    primaryMaterial:{
        type:String,
        required:true
    },
    isReturnable:{
        type:String,
        default:"No",
        enum:["No","Yes"]
    },
    stocks:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    reviews:{
        type:Array,
        default:[]
    }
})
module.exports=productModel