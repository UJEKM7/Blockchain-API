import express, { Application } from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';

const app: Application = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json());

app.use('/api', routes);

app.use(errorHandler);

export default app;