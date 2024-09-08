const express = require("express");
const app = express();
const PORT = 8080;
const clientID = "Ov23li7KxiILIkmUk1rj";
const client_secret = "11e703d1af546d1112d4def8b4310fd1898ded6d";
const userRouter = require('./routes/route.js');
let accesToken = "";

const cors = require("cors");
const fetch = (...args) => 
    import('node-fetch').then(({default:fetch})=>fetch(...args));
const bodyParser = require("body-parser"); 

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../public'));

app.use('/',userRouter);

app.get('/getAccesstoken',async (req,res)=>{
    let params = `?client_id=${clientID}&client_secret=${client_secret}&code=${req.query.code}`;
    await fetch(`https://www.github.com/login/oauth/access_token${params}`,{
        method:'POST',
        headers:{
            'Accept':'application/json'
        }
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        accesToken = data.access_token;
        res.json(data);
    })
});

app.get("/userData",async (req,res)=>{
    await fetch("https://api.github.com/user",{
        method:'GET',
        headers:{
            'Authorization':req.get('Authorization'),
        }
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        res.json(data);
    })
})

app.post("/searchData",async(req,res)=>{
    let {name} = req.body;
    await fetch(`https://api.github.com/users/${name}`,{
        method:"GET",
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        let {message} = data;
        if(message){
            res.json({"message":":) No matching user Data"});
        }else{
            res.json(data);
        }
    })
})


app.listen(PORT,()=>{
    console.log(`server running on localhost ${PORT}`);
})