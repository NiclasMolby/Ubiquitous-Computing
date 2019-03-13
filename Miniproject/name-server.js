const express = require('express')
const simpleJsonFilter = require('simple-json-filter')
const students = require('./students.json')
const app = express()
const port = 3000

app.get('/', (req, res) => { 
    console.log("Test")
    res.send('Hello World!') 
})

app.get('/user', (req, res) => 
    res.send(findStudents(req.query.name))
)

app.post('/user', (req, res) => {

    res.send("Hi Lars")
})

function findStudents(name) {
    var sjf = new simpleJsonFilter();
    var filter = {name: name};
    var result = sjf.exec(filter, students.students);
    return simplifyResult(result)
}

function simplifyResult(result) {
    var keys = Object.keys(result);
    if (keys.length == 1) {
        return result[keys[0]]
    }
    return result
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))