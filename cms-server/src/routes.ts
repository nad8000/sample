import { rootHandler, reportCsvHandler } from './handlers';

const express = require('express');
const router = express.Router();

router.get('/', rootHandler);
router.get('/TagReport', reportCsvHandler);

export default router;
