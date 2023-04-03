const { log } = require('console');
const express = require('express')
const app = express()
const port = 3000;
const fs = require('fs')
const fileName = 'bmi.json'
const bodyparser = require("body-parser");

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ entended: true }))

// Load BMI json from file
let rawData = fs.readFileSync(fileName);
let data = JSON.parse(rawData);

app.set('views', 'views')
app.set('view engine', 'hbs')
app.use(express.static('public'))

function BMI(weight,height){
    return parseInt(weight) / (parseFloat(height) ** 2).toFixed(2)
}

app.get('/', (request, response) => {
    response.render('home', { name: "John Doe" })
})

app.get('/individual', (request, response) => {
    response.render('individual')
})

app.get('/report', (request, response) => {
    response.render('report')
})

app.get('/get-bmi', (request, response) => {
    response.send(data)
})

app.post('/process', (request, response) => {
    const { weight, height } = request.body
    // const bmi = parseInt(weight) / (parseFloat(height) ** 2)
    const info = {
        bmi: BMI(parseInt(weight),parseFloat(height))
    }
    data.push(info)
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
    response.redirect('/individual')
})

app.listen(port, () => console.log(`Sever is listening on port ${port}`))