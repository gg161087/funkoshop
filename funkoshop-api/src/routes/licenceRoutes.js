import { Router } from 'express';

import licenceController from './../controllers/licenceController.js';
import authMiddleware from './../middleware/authMiddleware.js';

const router = Router();

router.get('/', authMiddleware.authenticateToken, licenceController.getLicences);
router.get('/:licence_id', authMiddleware.authenticateToken, licenceController.getLicence);
router.post('/', authMiddleware.authenticateToken, licenceController.createLicence);
router.put('/:licence_id', authMiddleware.authenticateToken, licenceController.updateLicence);
router.delete('/:licence_id', authMiddleware.authenticateToken, licenceController.deleteLicence);

export default router;