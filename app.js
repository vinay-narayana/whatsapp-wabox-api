require('custom-env').env('dev');
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const Actions = require('./routes/action');
const sampleMiddleware = require('./middleware/checker');
const appConfig = require('./config/main');
// if (process.env.NODE_ENV !== 'production') {
//   }
app.use(bodyParser.json())

// Middlewares
// app.use("/events", sampleMiddleware)

// // Routes
app.use("/action", Actions);


app.get('/', (req,res) => {
    res.status(200).send('Hello world');
})

app.listen(port, () => {
    console.log('app running at port ', port);
})
