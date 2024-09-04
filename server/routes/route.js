import express from 'express';

import { newUrl, getUrls, deleteUrl } from '../controller/urlcontroller.js';
import { authenticateToken } from '../controller/jwt-controller.js';


const router = express.Router();

router.post('/url/new', newUrl);
router.get('/urls', getUrls);
router.delete('/url/:_id', deleteUrl);

export default router;