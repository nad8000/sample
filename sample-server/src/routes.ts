
import { rootHandler, sampleHandler } from './handlers';

const express = require('express');
const router = express.Router();

router.get('/', rootHandler);
router.get('/sample', sampleHandler);

export default router;