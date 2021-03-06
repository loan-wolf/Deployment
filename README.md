# Backend-Server
APIs for the backend server


# How to run:
- run mongod locally with default port
- npm install packages inside repository
- run node app.js to start server

# Postman sameple call:
- https://www.getpostman.com/collections/3326d86ec04f0d6b4b73

# API Documentation

This repository includes all Loan wolf's backend APIs that interacts with a database. Below is the list of APIs and their usages:

## /applyloan POST

    {   
        "tokentype": String, e.g. "USDT", "AAVE", "ETH" //token type to loan
        "duration": Number, e.g. 12 // Number of Months the loan is held
        "loanamount": Number,  e.g. 1000 // Amount of tokens to be lent
        "collateraltoken": String, // Collateral token the borrower will deposit
        "collateralamount": Number, // Collateral amount the borrower will deposit
        "fullname": String, // Borrower's full name
        "email": String, // Borrowers email
        "address": String, // Borrowers address
        "passportid": String, // Borrowers passport
        "monthlysalary": Number, // Borrowers monthly salary
        "monthlyspending": Number, // Borrowers monthly spendings
        "paymentcontractaddress": String, // Payment contract of the Loan
        "erc20address": String // payment address of the Borrower
      }

This endpoint will register a borrower's intent to apply for a loan and only relevant information will be available to a lender.

## /getloans/:erc20address GET

Given the erc20address, this endpoint will query the database of all loans that were lent to payment address.


# About this Repo

This repo contains both the backend server and the Angular application (under the UI folder).
3 lines were added the app.js file to automatically route the angular app:
`app.use(express.static(process.cwd()+"/UI/dist/loanwolfui/"));`

`app.get('/', (req,res) => {
		res.sendFile(process.cwd()+"/UI/dist/loanwolfui/index.html")
});`

`app.get('/home', (req,res) => {
	res.sendFile(process.cwd()+"/UI/dist/loanwolfui/index.html")
});`

To run the repo, cd to the directory of the UI and do 
        `npm i`
        `npm run build`

then go back to the main directory and do:
        `npm i`
        `npm start`

Now go to your webrowser to `locahost:5000`
  
  
 
