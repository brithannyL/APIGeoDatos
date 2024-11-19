import { Router } from 'express';
import {
    getDatos,
    getDatoById,
    postDato,
    putDato,
    patchDato,
    deleteDato
} from '../controladores/datosCtrl.js';

const router = Router();

router.get('/datos', getDatos); // SELECT *
router.get('/datos/:id', getDatoById); // SELECT by ID
router.post('/datos', postDato); // INSERT
router.put('/datos/:id', putDato); // UPDATE (full)
router.patch('/datos/:id', patchDato); // UPDATE (partial)
router.delete('/datos/:id', deleteDato); // DELETE

export default router;
