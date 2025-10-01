import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js';
import {addDepartment, getDepartments} from '../controllers/departmentController.js';

console.log("Hi")
const router = express.Router();

router.get('/',authMiddleware, getDepartments);

router.post('/add', authMiddleware, addDepartment);

export default router;
