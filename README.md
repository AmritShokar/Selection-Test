# Freshworks Studio Fulll Stack Selection Test

Code base for the Freshworks full stack developer selection test. This code base contains both the client and the server.

#### The data entries table is accessed by the following url: ####
##### http://localhost:3000/collection #####

### Prerequisites
- - - -
- MySQL (~5.7) port: 3306
- Node (~ 12.0.0)
- NPM (~ 6.9.0)

### Setup Local Environment
- - - -
MySQL Setup:  
    1. create the user:  
        `create CREATE USER ‘test’@‘localhost' IDENTIFIED BY ‘test’;`  
    2. create the data base:  
        `CREATE DATABASE selection_test`  
    3. grant all privileges to user:  
        `GRANT ALL PRIVILEGES ON selection_test.* TO 'test'@'localhost';`  
    4. flush privileges after finishing database setup  
        `FLUSH PRIVILEGES;`  

Client Environment Setup:  
    1. move into front-end directory:  
        `$ cd client`  
    2. install dependencies:  
        `$ npm install`  

Server Environment Setup:  
    1. move into back-end directory:  
        `$ cd server`  
    2. install dependencies  
        `$ npm install`  

### Run Tests
- - - -
Client Tests:  
    1. launch test runner:  
        `npm test`  
    2. run all tests by selecting the 'a' key  

Server Tests:  
    1. build tests:  
        `npm run build-test`  
    2. run tests:  
        `npm test`  

### Start Application In Local Environment
- - - -
Start Server:  
    * build server:  
        `npm run build`  
    * run server:  
        `npm run start`  

Start Client:  
    * run client:  
        `npm start`  
    * if the application does not open, use the following url:  
        `http://localhost:3000`  
