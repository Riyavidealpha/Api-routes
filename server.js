const express = require('express');
const app = express();
const routes = require('./routers/users');
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/', routes);

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});
