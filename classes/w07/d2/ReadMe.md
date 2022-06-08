# Fruits - Express App

## REST - representational state transfer

URL Design System

```js
app.get("/people/simon", (req, res) => {
    // do whatever
} )
```

Index URL: /fruits/ (GET)
See: All the fruits

Show URL: /fruits/:id (GET)
See: Specific fruit

URL: /fruits/new (GET)
See: Form to upload

URL: /fruits (POST)
Do: uploads the fruit

URL: /fruits/:id/edit (GET)
See: Form to edit the fruit

URL: /fruits/:id (PUT)
See: updates the fruit

URL: /fruits/:id (DELETE)
See: Delete your fruit

## Unit 3 Stages

1. Express + EJS (Template Engine)
2. Express + EJS + Mongodb (data)
3. Express + React + Mongodb

## MVC - Model View Controller

Idea to design our app

* Model -  Data =>  Database
* View - HTML => EJS => React
* Controller - JS => Express