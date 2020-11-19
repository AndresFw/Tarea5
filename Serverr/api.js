const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000

app.use(cors())
app.use(bodyParser.text())
app.use(express.json())

app.get('/cities/', (req, res) => {
  res.send('{"list": [{"id":1, "code": "Bogota"},{"id":2, "code": "Bucaramanga"}]}')
})

registrosServer = []

app.post('/registerCity/',(req, res) => {
  var code = req.headers.code;
  var namecity = req.headers.namecity;
  var namecountry = req.headers.namecountry;
  var namecontinent = req.headers.namecontinent;
  var newdata = '{"code":"'+code+'","namecity":"'+namecity+'","namecountry":"'+namecountry+'","namecontinent":"'+namecontinent+'"}'
  var myjson = '{"list": ['
  registrosServer.push(newdata)
  for(i=0; i<registrosServer.length; i++){
    if(i == registrosServer.length-1){
      myjson += registrosServer[i]
    }else{
      myjson += registrosServer[i]+','
    }
  }
  myjson += ']}'
  res.send(myjson)
})

app.get('/parks/:city', (req, res) => {
    if(req.params.city === 'tunja'){
        res.send('Parque de los novios, laguna park')
    }
  res.send('No hay registros')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})