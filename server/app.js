const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5002;

const indexRoutes = require('./routes/index');
const errorHandler = require("./middleware/errorHandler");

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

// global error handler
// app.use(errorHandler);


app.use(indexRoutes);



app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});


