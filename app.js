const express = require('express');
const indexRouter = require('./routes/indexRouter');
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");

const app = express();

app.use('/', indexRouter);
app.use('/authors', authorRouter);
app.use('/books', bookRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My first Express app - listening on port ${PORT}!`);
})

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
});