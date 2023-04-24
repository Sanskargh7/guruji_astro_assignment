const express = require('express');
const { signup, signin } = require('../controllers/User');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validator/user');
const router = express.Router();


router.post('/signup',validateSignupRequest, isRequestValidated, signup);
router.post('/signin',validateSigninRequest, isRequestValidated, signin);





// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// });

module.exports = router;