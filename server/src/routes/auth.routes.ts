import { Router } from "express";
import { check } from "express-validator";
import AuthController from "../controllers/auth.controller";
import authMiddleware from "../middlewares/auth";

const router = Router()


router.post('/registration', [
    check('email', 'Unccorect email').isEmail(),
    check('password', 'Unccorect password').isLength({min: 4, max: 10}),
], AuthController.registration)
router.post('/login', AuthController.login)
router.get('/auth', authMiddleware, AuthController.auth)

export default router;