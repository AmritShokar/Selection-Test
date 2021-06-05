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






















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
