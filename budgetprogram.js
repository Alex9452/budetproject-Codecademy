const express = require('express')
const app = express()
const port = 3000
// const {getElementById, getIndexById, createElement} = require('/utils')
app.use(express.static('public'))
const envolopes = {
    diningOut: 300,
    groceries: 400,
    rent: 1600,
    automotive: 375,
    savings: 600,
    projects: 475

}


app.get('/', (req, res, next) => {
    res.send('Hello world!')
})

app.get('/envolopes', (req, res, next) => {
    res.send(envolopes)
    
})

app.get('/envolopes/:name', (req, res, next) => {
    const name = getElementById(req.param.name,envolopes)
    res.send(person)
})

app.post('/envolopes', (req,res, next) => {
    const newPerson = push('envolopes', req.query)
    if (newPerson) {
        envolopes.push(newPerson)
        res.status(201).send(newPerson)
        res.send('Your information has been sent succesfully!')
    } else {
        res.status(400).send()
        res.send('There has been an error! Please try again.')
    }
})
//transfering between envolopes
app.post('/envolopes/transfer/:from/:to', (req ,res, next) => {
    const fromEnvolope = req.params.name
    const toEnvolope = req.params.name
    const moneyEx = ''
    if (fromEnvolope == toEnvolope){
        res.send('Can not be same Envolope')
    } else {
        fromEnvolope - moneyEx
        toEnvolope + moneyEx
    }
})

app.put('/envolopes',(req, res, next) => {
    const envolopeUpdates = getIndexById(req.params.id,envolopes)
    if(envolopeUpdates !== -1){
        updateElement(req.params.name, req.query, envolopes)
        res.send(envolopes(envolopeUpdates))    
    } else {
        res.status('404').send()
    }
})

app.delete("/envolopes/:name", (req, res, next) => {
    const nameIndex = getIndexById(req.params.name, envolopes)
    if(nameIndex !== -1) {
        envolopes.splice(nameIndex,1)
        res.status(204).send(nameIndex)
    } else {
        res.status(404).send()
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})