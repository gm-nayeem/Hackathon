const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

var corsOptions = {
    origin: "http://localhost:3000"
};


const middlewares = [
    morgan('dev'),
    cors(corsOptions),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
];

module.exports = (app) => {
    middlewares.forEach(middleware => app.use(middleware));
};