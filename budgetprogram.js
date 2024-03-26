const express = require('express')
const app = express()
const port = 3000

const envolopes = ['']

app.use(express.static('public'))



app.get('/', (req, res, next) => {
    res.send('Hello world!')
})

app.get('/envolopes', (req, res, next) => {
    res.send(envolopes)
    
})

app.get('/envolopes/:name', (req, res, next) => {
    const person = getElementById(req.param.name,envolopes)
    res.send(person)
})

app.post('/envolopes', (req,res, next) => {
    const newPerson = createElement('envolopes', req.query)
    if (newPerson) {
        envolopes.push(newPerson)
        res.status(201).send(newPerson)
        res.send('Your information has been sent succesfully!')
    } else {
        res.status(400).send()
        res.send('There has been an error! Please try again.')
    }
    
    
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})