const app = require('./app');
const connectDatabase = require('./config/dbConn');

const port = process.env.PORT || 8000;
app.listen(port, async () => {
    console.log('Server is running successfully');

    await connectDatabase();
});