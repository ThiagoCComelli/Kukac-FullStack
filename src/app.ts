import express from "express"
import { noAuth } from "./routes/noAuth"

const app = express()

app.use(express.json())
app.use("/noAuth", noAuth)

export {app}