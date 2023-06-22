import express from "express";
import { detect, languages, register, translate } from "../controllers/usercontrollers.js";

const router=express.Router();

router.post('/register',register);
router.post('/detect',detect)
router.get('/languages',languages)
router.post('/translate',translate)



export default router;

