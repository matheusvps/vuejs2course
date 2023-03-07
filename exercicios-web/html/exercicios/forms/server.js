const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
// Se o método abaixo fosse GET ao invés de POST, os dados não viriam no body(req.body), mas numa string query string.
// Via de regra o post é utlizado. A vantagem do get é a possibilidade de replicar URLs
app.post('/usuarios',(req,resp) => {
    console.log(req.body)
    resp.send('<h1> Parabéns. Usuário incluído </h1>')
})

app.post('/usuarios/:id',(req,resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário alterado. </h1>')
})

app.listen(3003)