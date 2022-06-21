const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require("cors")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/api/v1/authen/", require("./v1/authen.route"))
app.use("/api/v1/content/", require("./v1/content.route"))

app.listen(8080, () => {
    console.log("backend is running....")
})
