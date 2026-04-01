const express = require('express');
const app = express();

app.get('/health', (req, res) => {
    res.json({status: 'okk', time: new Date()});
});

app.get("/api/activities", (req, res) => {
    res.json([]);
});

app.listen(3000, () => console.log("VItalSync API on : 3000"));