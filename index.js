const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { readFileSync } = require('fs');

// Read local graphql schema file
const schemaFile = readFileSync(__dirname + '/schema.graphql', 'utf8')

// Construct a schema, using GraphQL schema language
const schema = buildSchema(schemaFile);

// The root provides a resolver function for each API endpoint
const root = require('./resolvers/root');

const app = express();
// Normal REST endpoints
const universities = require('./routes/universities');
const health = require('./routes/health');
app.use('/universities', universities);
app.use('/health', health);

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    customFormatErrorFn: (error) => ({
        message: error.message,
        locations: error.locations,
        stack: error.stack ? error.stack.split('\n') : [],
        path: error.path,
    })
}));


app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');