import express, { Express } from 'express';
import carValueRoutes from './routes/carValueRoutes';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
app.use(express.json());

app.use('/api/carvalue', carValueRoutes);

const port: number = Number(process.env.PORT) || 8000;
app.listen(port, () => {
    console.log(`Server started and listening on port ${port}`);
});

export default app;
