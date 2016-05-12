export default class TodoHandler {
  constructor() {

  }

  handle (body) {
    switch (body.event) {
      case 'NODE_CREATED':
        this.todoCreated(body.data)
        break
      case 'NODE_DELETED':
        this.todoCreated(body.data)
        break
      case 'NODE_CREATED':
        this.todoCreated(body.data)
        break
      default:
        this.todoCreated(body.data)
    }
    return 0
  }

  todoCreated (data) {
    const todo = this._parseTodo(data)
    console.log(todo)
    return
  }

  todoUpdated (data) {
    console.log('updated hook not implemented')
    console.log(todo)
    return
  }

  todoDeleted (data) {
    console.log('deleted hook not implemented')
    console.log(todo)
    return
  }

  todoAddedToConnection (data) {
    console.log('addedToConnection hook not implemented')
    console.log(todo)
    return
  }

  todoRemovedFromConnection (data) {
    console.log('removeFromConnection hook not implemented')
  }

  _parseTodo(data) {
    return {complete: data.node.complete, text: data.node.text, id: data.node.id}
  }
}

/*
{
    "event": "NODE_CREATED",
    "mutation_id": "cio4eah8m006h01p0ltar3h36",
    "data": {
        "node": {
            "text": "hello",
            "complete": false,
            "id": "VG9kbzpjaW80ZWFoODgwMDZnMDFwMGVmMWp2bGsz"
        },
        "node_type": "Todo"
    }
}
*/
