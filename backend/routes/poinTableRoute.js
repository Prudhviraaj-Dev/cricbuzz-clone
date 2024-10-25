const express = require('express');
const router = express.Router();
const seasonController = require('../Controllers/SeasonController'); // Match the exact casing

// Routes
router.post('/seasons', seasonController.insertSeasonData);
router.get('/seasons/:year', seasonController.getSeasonByYear);

module.exports = router;
