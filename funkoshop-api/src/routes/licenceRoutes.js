import { Router } from 'express';

import { getLicenceById, getAllLicences, createLicence, updateLicenceById, deleteLicenceById } from './../controllers/licenceController.js';

export const licenceRouter = Router();

licenceRouter.get('/:id', getLicenceById);
licenceRouter.get('/', getAllLicences);
licenceRouter.post('/', createLicence);
licenceRouter.put('/:id', updateLicenceById);
licenceRouter.delete('/:id', deleteLicenceById);