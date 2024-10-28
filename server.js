require("dotenv").config()
const express = require("express")
const app = express()

app.use()

const port = process.env.PORT || 8888
app.listen(port,()=>console.log("Server Run 8888"))