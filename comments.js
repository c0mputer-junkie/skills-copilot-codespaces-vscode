//Createe web server
const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
});

//Create a comment
app.post('/comments', (req, res) => {
    res.send('You are trying to create a comment');
});

//Get all comments
app.get('/comments', (req, res) => {
    res.send('You are trying to get all comments');
});

//Get a comment by id
app.get('/comments/:id', (req, res) => {
    res.send('You are trying to get a comment with id:' + req.params.id);
});

//Update a comment by id
app.put('/comments/:id', (req, res) => {
    res.send('You are trying to update a comment with id:' + req.params.id);
});

//Delete a comment by id
app.delete('/comments/:id', (req, res) => {
    res.send('You are trying to delete a comment with id:' + req.params.id);
});