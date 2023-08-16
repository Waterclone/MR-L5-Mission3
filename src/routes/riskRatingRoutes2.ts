import express from 'express';
import { getRiskRating2 } from '../controllers/riskRatingController2';

const router = express.Router();

router.post('/', getRiskRating2);

export default router;