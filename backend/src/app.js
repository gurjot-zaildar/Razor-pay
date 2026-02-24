const express = require("express")
const connectDB = require("./db/db")
const productRoutes = require("./routes/product.routes")
const cors = require("cors")

const app = express()
app.use(cors());
connectDB()

app.use(express.json())

app.use("/api/products",productRoutes)

module.exports = app