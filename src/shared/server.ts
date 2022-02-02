import 'dotenv/config';
import 'express-async-errors';
import 'shared/container';
import '@shared/database/typeorm';

import express from 'express'
import ErrorHandler from './errors/ErrorHandler';
import AppError from './errors/AppError';

const app = express()
const port = process.env.APP_PORT || 3000

app.get('/test', (req, res) => {throw new AppError('Teste', 200)})

app.use(ErrorHandler);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))