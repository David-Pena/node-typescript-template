import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import cors from 'cors';
dotenv.config({ path: path.join(process.cwd(), '.env.dev') });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
import DummyRouter from './src/routes/dummy';

app.use('/api/v1/dummy', DummyRouter);

// Healthy check
app.get('/', (_, res) => res.send('Welcome! Dummy API working.'));
app.listen(process.env.PORT, () => {
  console.log(`Server up & running @ ${process.env.PORT}`);
});
