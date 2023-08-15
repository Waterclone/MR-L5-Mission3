import express from 'express';
import { getCarValue } from '../controllers/carController';

const router = express.Router();

router.post('/', getCarValue);

export default router;