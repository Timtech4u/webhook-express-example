export default class TodoHandler {
  handle (body) {
    switch (body.event) {
      case 'NODE_CREATED':
        this.todoCreated(body.data)
        break
      case 'NODE_UPDATED':
        this.todoUpdated(body.data)
        break
      case 'NODE_DELETED':
        this.todoDeleted(body.data)
        break
      default:
        // ignore updates to connections
        console.log('not implemented yet')
    }
  }

  todoCreated (data) {
    const todo = this._parseTodo(data)
    console.log('created todo:')
    console.log(todo)

    // now we can do something cool, for example send a reminder email!
  }

  todoUpdated (data) {
    const todo = this._parseTodo(data)
    console.log('updated todo:')
    console.log(todo)

    // todo was updated
  }

  todoDeleted (data) {
    const todo = this._parseTodo(data)
    console.log('deleted todo:')
    console.log(todo)

    // todo was deleted
  }

  _parseTodo(data) {
    return {
      complete: data.node.complete,
      text: data.node.text,
      id: data.node.id,
    }
  }
}
