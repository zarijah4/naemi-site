const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/hello', (req, res) => {
    res.json({ message: "Привет с сервера!"});
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
})