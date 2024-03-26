const express = require('express')
const app = express()
const port = 3000

const envolopes = []

app.get('/', (req, res, next) => {
    res.send('Hello world!')
})

app.get('/envelopes', (req, res, next) => {
    res.send(evolopes)
})

app.post('/envelopes', (req,res, next) => {
    res.send('Your information has been sent succesfully')
    res.status(200)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})