const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res,next) => {
    console.log('Hello world!')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})