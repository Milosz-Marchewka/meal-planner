import {Router} from "express";
import type {Request, Response} from "express";
import { validateEmail, validatePassword, type ValidationResult } from "../../utils/loginValidation";

const loginRoutes = Router();

loginRoutes.post("/", (req: Request<{}, {}, {email: string, password: string}>, res: Response<[ValidationResult, ValidationResult]>)=>{
    console.log('wazzup');

    const { email, password } = req.body;

    const emailValidation: ValidationResult = validateEmail(email);
    const passwordValidation: ValidationResult = validatePassword(password);

    res.json([emailValidation, passwordValidation]);
});

export default loginRoutes;