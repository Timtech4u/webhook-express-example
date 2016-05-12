import express from 'express'
import bodyParser from 'body-parser'
import TodoHandler from './TodoHandler'

const app = express()
const PORT = 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/', (req, res) => {
  switch (req.body.data.node_type) {
    case 'Todo':
      const todoHandler = new TodoHandler()
      todoHandler.handle(req.body)
      break
    default:
      break
  }

  res.end()
})

app.listen(PORT, () => {
  console.log(`Server listening for graph.cool webhooks on port ${PORT}`)
})
