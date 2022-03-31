import express from "express"
import cors from "cors"
import { noAuth } from "./routes/noAuth"

const app = express()

app.use(cors())
app.use(express.json())
app.use("/noAuth", noAuth)

export {app}