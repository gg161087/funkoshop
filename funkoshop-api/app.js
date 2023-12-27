import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { PORT } from './config.js';

import { categoryRouter } from './src/routes/categoryRoutes.js';
import { productRouter } from './src/routes/productRoutes.js';
import { licenceRouter } from './src/routes/licenceRoutes.js'
import { userRouter } from './src/routes/userRoutes.js';
import { roleRouter } from './src/routes/roleRoutes.js';

const app = express();

//Settings
app.set('port', PORT);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/categories', categoryRouter);
app.use('/api/products', productRouter);
app.use('/api/licences', licenceRouter);
app.use('/api/users', userRouter);
app.use('/api/roles', roleRouter);

export default app;