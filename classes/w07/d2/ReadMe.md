# Fruits - Express App

## Web

Client - (Request - Always Str) -> Server
Server - (Response - Always Str) -> Client

## Project

CRUD - Create, Read, Update, Delete

GET - Type Browser URL
* Data is sent in the URL (limit)
* Idempotence - Safe to repeat

POST - Form, method=POST
* Hide the data being
## REST - representational state transfer

URL Design System

Index URL: /fruits/ (GET)
See: All the fruits

Show URL: /fruits/:id (GET)
See: Specific fruit

Create URL: /fruits/ (POST)
Do: uploads the fruit

Update URL: /fruits/:id (PUT)
See: updates the fruit

DELETE URL: /fruits/:id (DELETE)
See: Delete your fruit

### Not needed when using React

New URL: /fruits/new (GET)
See: Form to upload

Edit URL: /fruits/:id/edit (GET)
See: Form to edit the fruit

## Unit 3 Stages

1. Express + EJS (Template Engine)
2. Express + EJS + - Mongoose -> Mongodb (data) - NOSQL (Unit 3), SQL (Unit 4)
3. Express + React + Mongodb

## MVC - Model View Controller

Idea to design our app

* Model -  Data =>  Database
* View - HTML => EJS => React
* Controller - JS => Express
## Deploy - Heroku not Vercel

Node - Express + React (static files concept)

## Mongodb

* Database & Subdatabase - Many Collections
* Collection - Many Fruits - array
* Document - 1 Fruit - object

## Project 

Design your database -> design how data looks like