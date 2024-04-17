const express = require("express")
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json())
app.use(cors({origin: true}))

app.post("/authenticate", async(req,res) =>{
    const {username} = req.body;
    try{
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            {username: username,secret: username, firt_name: username},
            {headers:{"pivate-key": "315490f4-6105-4f2f-a3ba-67c7347291df"}}
        )
        return res.status(r.status).json(r.data)
    }catch(e){
        return res.status(e.response.status).json(e.response.data)
    } 
})
// Passworld:315490f4-6105-4f2f-a3ba-67c7347291df
app.listen(3001);
// npm run start