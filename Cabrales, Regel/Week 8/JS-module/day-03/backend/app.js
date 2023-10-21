const express= require('express');

// Create the express aspp
const app = express();

// Route Handler
// request and response
// localhost:3000/
app.get('/', (req, res) => {
    res.json({message: 'Hello API'});
    console.log(req);
});

app.get('/users', (req, res) => {
    res.send('<h1>You are in the users section.</h1>');
    console.log(res);
})

// listen for requests
app.listen(3000, () => {
    console.log('Listening to port 3000...');
});

