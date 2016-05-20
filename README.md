# webhook-express-example
Example for the webhook feature on graph.cool.


## Getting started
After [downloading this example](https://github.com/graphcool-examples/webhook-express-example/archive/master.zip) please follow these steps.

### 1. Choose a front end example
You could try the [React/Relay example app](https://github.com/graphcool-examples/react-relay-todo-example) or the [React/Apollo example app](https://github.com/graphcool-examples/react-apollo-todo-example). Finish all the steps from the example you prefer, including installing and running the app.

### 2. Enter the webhook URL
If you want to run the server locally you can setup [ngrok](https://ngrok.com/) to be a tunnel towards your localhost with the following command. ngrok will print out a forwarded URL looking like this: http://10a249a0.ngrok.io.

```sh
ngrok http 5000
```

Enter the URL your webhook-express server is listening on (or a forwarded ngrok URL) in the project settings at [graph.cool](graph.cool).

### 3. Run the webhook-express server
Run the following code to start listening on mutation events of your [graph.cool](graph.cool) backend.

```sh
npm install
npm start
```

### 4. Use the app
Use the frontend app to do some mutations. For example, if you create a new Todo in your browser, your webhook-express server should output the following log:

```sh
created todo:
<Todo>
```

For more information check the [documentation](http://docs.graph.cool/docs/webhooks/).


## Help & Community [![Slack Status](https://slack.graph.cool/badge.svg)](https://slack.graph.cool)

Join our [Slack community](http://slack.graph.cool/) if you run into issues or have questions. We love talking to you!
