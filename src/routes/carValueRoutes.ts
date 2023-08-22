import express from 'express';
import { getCarValue } from '../controllers/carValueController';

const router = express.Router();

router.post('/', getCarValue);

export default router;
