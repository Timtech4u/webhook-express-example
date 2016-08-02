import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const PORT = 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/', (req, res) => {
  const todo = {
    complete: req.body.createdModel.complete,
    text: req.body.createdModel.text,
  }

  console.log('created todo:')
  console.log(todo)

  res.end()
})

app.listen(PORT, () => {
  console.log(`Server listening for graph.cool webhooks on port ${PORT}`)
})
