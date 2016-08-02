# actions-express-example
Example for the actions feature on graph.cool.

## Getting started
After [downloading this example](https://github.com/graphcool-examples/actions-express-example/archive/master.zip) please follow these steps.

### 1. Choose a front end example
You could try the [React/Relay example app](https://github.com/graphcool-examples/react-relay-todo-example) or the [React/Apollo example app](https://github.com/graphcool-examples/react-apollo-todo-example). Finish all the steps from the example you prefer, including installing and running the app.

### 2. Create an action
* In the action creator at graph.cool, choose 'Todo is created' as the trigger and enter the following query as the action handler payload:
```grapqhl
{
  createdModel {
    complete
    text
  }
}
```

* Enter the URL your action-express server is listening on (for example a forwarded [ngrok](https://ngrok.com/) URL).

* Confirm to create the action

### 3. Run the actions-express server
Run the following code to start handling the creation of Todos in your [graph.cool](graph.cool) backend.

```sh
npm install
npm start
```

### 4. Use the app
Use the frontend app to do some mutations. If you create a new Todo in your browser, your action-express server should output the following log:

```sh
created todo:
<Todo>
```

For more information check the [documentation](http://docs.graph.cool/).


## Help & Community [![Slack Status](https://slack.graph.cool/badge.svg)](https://slack.graph.cool)

Join our [Slack community](http://slack.graph.cool/) if you run into issues or have questions. We love talking to you!

![](http://i.imgur.com/5RHR6Ku.png)
