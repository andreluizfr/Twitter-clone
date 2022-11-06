import 'dotenv/config';
import path from 'path';
import express, { Request, Response, NextFunction } from 'express';
import {userRouter} from './routes/userRoutes';
const cors = require('cors');

// **** Init express **** //
const app = express();


// **** Set basic express settings **** //
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


// **** Add API routes **** //
app.use('/user', userRouter);


// Setup error handler
app.use((
  err: Error,
  _: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  return res.status(404).json({ error: err.message });
});


// **** Serve front-end content **** //

// Set static directory (js and css).
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));


export default app;
