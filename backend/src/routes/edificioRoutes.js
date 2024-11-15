import express from 'express';
import {EdificioId, Edificios, deleteEdificioById, createEdificio} from '../controllers/edificioController.js'; 

const router = express.Router();

router.get('/lista-edificios', Edificios); 
router.get('/edificio', EdificioId);
router.delete('/edificio', deleteEdificioById);
router.post('/edificio', createEdificio);


export default router;
