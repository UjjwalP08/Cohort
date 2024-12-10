const express = require('express')

const app = express();

app.use(express.json())

let request = 0;

//User Validation Middleware
function userValidation(req, res, next) {

    const userName = req.headers.username;
    const password = req.headers.password;
    // console.log(userName, password);
    if (userName !== 'ujjwal' || password !== '123') {
        res.status(403).json({
            message: 'User does not exist'
        })
        return;
    }

    next();

}

// Kidney Middleware
function kidneyMiddleware(req, res, next) {
    const kidneyId = req?.query?.kidneyId;
    // console.log(+kidneyId, kidneyId !== 1 && kidneyId !== 2);
    if (+kidneyId !== 1 && +kidneyId !== 2) {
        res.status(403).json({
            message: 'Wrong inputs!!!'
        })
        return;
    }
    next()
}



app.get("/health-checkup", userValidation, kidneyMiddleware, function (req, res) {
    // const query = req.query;
    request++;

    // console.log(userName, password);
    res.send(`You are healthy and the request is fire is ${request}`);
})

app.listen(5000, function () {
    console.log("Server is running on port 5000");
})