const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/imad', (req, res) => {
    res.send('I am Imad!')
})

app.get('/awab', (req, res) => {
    res.send('I am Awab!')
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});

