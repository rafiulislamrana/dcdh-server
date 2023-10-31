const express = require("express")
const cors = require("cors")
const port = process.env.PORT || 5000;

const app = express ()

// middleware 
app.use(cors())
app.use(express.json())

// APIs

app.get("/", async(req, res) => {
    res.send("DCDH Server is running")
})

app.listen(port, () => {
    console.log("This app is running on port", port)
})