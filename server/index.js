import expres from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = expres()

app.listen(8001,(req, res) => {
    console.log('worked')
})

app.get('/', (req, res) => {
    res.send('Hello')
})