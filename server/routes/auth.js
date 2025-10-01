import express from 'express';
import {login, verify} from '../controllers/authController.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const router = express.Router();

router.post('/login',login) //When someone sends a POST request to /login, it will run the login function (which is inside authController.js).
router.get('/verify',authMiddleware,verify)

export default router;