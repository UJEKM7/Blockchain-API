import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';

const app: Application = express();

app.use(cors());

app.use(helmet());

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json());

app.use('/api', routes);

app.use(errorHandler);

export default app;