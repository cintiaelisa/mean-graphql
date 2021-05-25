const bodyParser = require('body-parser');
const express = require('express');
const moongoose = require('mongoose');
const cors = require('cors');

const { graphqlHTTP } = require('express-graphql');

const config = require('./config/config.json');

const app  = express();

app.use(bodyParser.json);

app.use(cors());

// graphql
// app.use(
//     '/graphql',
//     graphqlHTTP({
//         schema://,
//         rootValue: //
//         graphql: true,

//     })
// )


moongoose.connect(
    `mongodb://localhost:27017/${config.dbname}?retryWrites=true&w=majority`, {
        useUnifiedTopology: true, useNewUrlParse: true, useCreateIndex: true
    }
).then(() => {
    app.listen(3000, console.log('Connected to Port 3000'))
}).catch((err) => console.log(err))