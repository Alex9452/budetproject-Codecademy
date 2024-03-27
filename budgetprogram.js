const express = require('express')
const app = express()
const port = 3000
// const {getElementById, getIndexById, createElement} = require('/utils')
const envolopes = {
    'dining out':
    300,
    groceries:
    400
}

app.use(express.static('public'))



app.get('/', (req, res, next) => {
    res.send('Hello world!')
})

app.get('http://localhost:3000/envolopes', (req, res, next) => {
    res.send(envolopes)
    
})

app.get('http://localhost:3000/envolopes/:name', (req, res, next) => {
    const person = getElementById(req.param.name,envolopes)
    res.send(person)
})

app.post('http://localhost:3000/envolopes', (req,res, next) => {
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
//transfering between envolopes
app.post('http://localhost:3000/envolopes/transfer/:from/:to', (req ,res, next) => {

})

app.put('http://localhost:3000/envolopes',(req, res, next) => {
    const envolopeUpdates = getIndexById(req.params.id,envolopes)
    if(envolopeUpdates !== -1){
        updateElement(req.params.id, req.query, envolopes)
        res.send(envolopes(envolopeUpdates))    
    } else {
        res.status('404').send()
    }
})

app.delete("http://localhost:3000/envolopes/:name", (req, res, next) => {
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