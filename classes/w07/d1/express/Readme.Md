# npx nodemon server.js

# in scripts type    
"dev": " nodemon server.js",
npm run dev


## .env folder 
no spaces in the .env folder
## in the server.js folder
require('dotenv').config() ("Import")
const port = process.env.PORT || 3   000; 

## Steps to setup express
npm init
npm i express  / npm intsall express
npm install nodemon -g
