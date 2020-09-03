# sample-graphql-server

Sample server code for a graphql server

## How to run
- ```npm install```
- ```sequelize db:migrate``` to init the database
- ```sequelize db:seed:all``` to add seed data to the database
- ```npm start``` to start the server in port 4000

## Sample usage
- try ```http://localhost:4000/universities``` for normal REST API call
- access ```http://localhost:4000``` for GraphiQL and use the below query
```
{
  universities {
    faculties {
      programs {
        description
      }
    }
  }
}
```