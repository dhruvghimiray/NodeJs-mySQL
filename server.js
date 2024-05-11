import express from "express"
const app = express()

import bookRouter from "./routes/book.js"

app.use("/book", bookRouter);


app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})