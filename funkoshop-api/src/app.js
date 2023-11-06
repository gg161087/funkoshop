import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { PORT } from './config.js';

import indexRoutes from './routes/indexRoutes.js';

const app = express();

//Settings
app.set('port', PORT);

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use('/api/auth', indexRoutes.auth);
app.use('/api/categories', indexRoutes.category);
app.use('/api/licences', indexRoutes.licence);
app.use('/api/products', indexRoutes.product);
app.use('/api/roles', indexRoutes.role);
app.use('/api/users', indexRoutes.user);

export default app;