const express = require('express');
const route = require("./routes/route");
const { default : mongoose} = require ("mongoose");


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended :true}));


mongoose.connect("mongodb+srv://Avverma:Avverma95766@avverma.2g4orpk.mongodb.net/stock?retryWrites=true&w=majority",
 { useNewUrlParser : true}
)
.then(() => console.log("MongoDB is connected"))
.catch((err)=>console.log(err));


app.use ("/", route);

app.listen(process.env.PORT || 3000 , function(){
   console.log("Express is running on Port" + (process.env.PORT || 3000))
});