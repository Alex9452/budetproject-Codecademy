const express = require('express')
const app = express()
const port = 5432
 //{getElementById, getIndexById, createElement} = require('/utils')
app.use(express.static('public'))



app.get('/', (req, res, next) => {
    res.send('Hello world!')
})

app.get('/envelopes', (req, res, next) => {
    res.send(envelopes)
    
})

app.get('/envelopes/:id', (req, res, next) => {
    const name = getElementById(req.param.id,envelopes)
    res.send(name)
})

app.post('/envelopes', (req,res, next) => {
    const newEnvelope = push('envelopes', req.query)
    if (newEnvelope) {
        envelopes.push(newEnvelope)
        res.status(201).send(newEnvelope)
        res.send('Your information has been sent succesfully!')
    } else {
        res.status(400).send()
        res.send('There has been an error! Please try again.')
    }
})
//transfering between envelopes
app.post('/envelopes/transfer/:from/:to', (req ,res, next) => {
    const fromEnvelope = req.params.name
    const toEnvelope = req.params.name
    const moneyEx = ''
    if (fromEnvelope == toEnvelope){
        res.send('Can not be same Envolope')
    } else {
        fromEnvelope - moneyEx
        toEnvelope + moneyEx
    }
})

app.put('/envelopes',(req, res, next) => {
    const envelopeUpdates = getIndexById(req.params.id,envelopes)
    if(envelopeUpdates !== -1){
        updateElement(req.params.name, req.query, envelopes)
        res.send(envelopes(envelopeUpdates))    
    } else {
        res.status('404').send()
    }
})

app.delete("/envelopes/:id", (req, res, next) => {
    const nameIndex = getIndexById(req.params.name, envolopes)
    if(nameIndex !== -1) {
        envelopes.splice(nameIndex,1)
        res.status(204).send(nameIndex)
    } else {
        res.status(404).send()
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})