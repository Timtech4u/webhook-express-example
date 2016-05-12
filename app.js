import express from 'express'
import bodyParser from 'body-parser'
import TodoHandler from './todoHandler'

var app = express()
const PORT = 5000

var todoHandler = new TodoHandler()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.post('/', function (req, res) {
  if (req.body.data.node_type === 'Todo') {
    todoHandler.handle(req.body)
  }

  res.end()
})

app.listen(PORT, function () {
      console.log('Server listening for graph.cool webhooks on port ' + PORT);
})
