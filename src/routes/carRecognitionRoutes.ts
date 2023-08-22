import express from 'express';
import { predictImage } from '../controllers/carRecognitionController'; 

const router = express.Router();

router.post('/', predictImage); 

export default router;

