const { Router } = require('express');

const authorRouter = Router();

authorRouter.get('/', (req, res) => res.send('All Authors'));

authorRouter.get('/:authorId', (req, res) => {
    const {authorId} = req.params; // or req.params.authorId
    res.send(`Author: ${authorId}`);
});

module.exports = authorRouter;
