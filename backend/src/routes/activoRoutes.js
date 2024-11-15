import { Router } from 'express';
import { Activos, ActivoId, deleteActivoById, createActivo } from '../controllers/activoController.js';

const router = Router();

router.get('/activos', Activos);            
router.get('/activos/:id', ActivoId);         
router.delete('/activos/:id', deleteActivoById); 
router.post('/activos', createActivo);         
export default router;

