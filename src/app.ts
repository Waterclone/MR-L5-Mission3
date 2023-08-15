import express, { Express } from 'express';
import carRoutes from './routes/carRoutes';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
app.use(express.json());

app.use('/api/carvalue', carRoutes);

const port: number = Number(process.env.PORT) || 8000;
app.listen(port, () => {
    console.log(`Server started and listening on port ${port}`);
});

export default app;
