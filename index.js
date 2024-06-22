import express from'express'
import cors from 'cors'
const app = express()

const port = 4500
const teeTimes=[]

app.use(express.json())
app.use(cors())
app.post ("/api/teeTime", (req, res)=>{
    console.log (req.body)
    const {formData} = req.body
    teeTimes.push(formData)
    res.status(200).send(teeTimes)
})

app.listen(port, ()=> console.log (`server running on port: ${port}`))