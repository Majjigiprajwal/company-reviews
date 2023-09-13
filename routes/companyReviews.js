const express = require('express');

const companyController = require('../controllers/companyReview');

const router = express.Router();

router.post('/company-review',companyController.postCompanyReview);

router.get('/company-reviews/:id',companyController.getCompanyReviews)


module.exports = router;