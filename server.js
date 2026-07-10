const express = require("express");
const cors = require("cors");
const scanRoute = require("./routes/scan");

const app = express();

const Port = 3000;
app.use(cors());
app.use(express.json());

app.use("/api", scanRoute);

app.get("/", (req, res) => {
    res.send("Smooth Spend API");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});