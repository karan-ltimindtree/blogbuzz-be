import express, { Request, Response, NextFunction, Application, ErrorRequestHandler } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import router from './router';
import cookieParser from 'cookie-parser';
import Middleware from './middlewares';
import { corsOptions } from './config/cors.config';

config();

const app: Application = express();

// middlewares
app.use(Middleware.credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req: Request, res: Response) => {
  res.send('BlogBuzz BE App');
});

// health check API
app.get('/api/health', (req: Request, res: Response) => {
  res.send('Health check success!');
});

app.use(router);

app.use((_req: Request, res: Response, _next: NextFunction) => {
  const err = new Error('Not Found');
  res.status(404); // using response here
  return res.send({
    status: 404,
    message: err.message || '',
  });
});

const errorHandler: ErrorRequestHandler = (err, _req: Request, res: Response) => {
  res.status(err.status || 500);
  return res.send({
    status: err.status || 500,
    message: err.message || '',
  });
};

app.use(errorHandler);

export default app; // this export is needed for testing purpose
