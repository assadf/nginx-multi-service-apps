import express from 'express';
import homeRoute from './routes/homeRoute.js';

const app = express();

app.use('/', homeRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});