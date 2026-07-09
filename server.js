const express = require("express");
const cors = require("cors");

const app = express();

const Port = 3000;
app.use(cors());
app.use(express.json());

app.use("/api",scanRoute);

app.get("/",(req,res) => {
     res.send("Smooth Spend API");
});

app.listen(Port, () =>{
    console.log('Server running on http://localhost:${PORT}');
});
