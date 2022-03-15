import 'dotenv/config';
import 'express-async-errors';
import 'shared/container';
import '@shared/database/typeorm';
import 'reflect-metadata';

import cors from 'cors';
import express from 'express';
import ErrorHandler from './errors/ErrorHandler';
import routes from './routes';
import { errors } from 'celebrate';
import newKey from './config/jwt/generateKeyPair';

// newKey()

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(express.json({limit: '1kb'}))
app.use(cors())
app.use(routes);
app.use(errors())
app.use(ErrorHandler);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
