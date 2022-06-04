const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5002;

const indexRoutes = require('./routes/index');
const errorHandler = require("./middleware/errorHandler");



app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: 0,
        message: err.message,
        stack: err.stack
    })
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const corsOption = {
    origin: true,
    methods: "GET,PUT,POST,OPTIONS,DELETE",
    allowedHeaders: "Origin,X-Requested-With,Content-type,Accept,X-Access-Token,X-Key,cache-control, x-access-token",
    credentials: true,
    maxAge: 3600
};
const cors = require('cors')(corsOption);
app.use(cors);

// app.all('/api/web/*', [require('./middleware/validator')]);
app.all('/api/auth/*', [require('./middleware/validator')]);

app.use(indexRoutes);

// global error handler
app.use(errorHandler);




app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});


