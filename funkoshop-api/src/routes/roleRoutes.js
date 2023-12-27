import { Router } from 'express';

import { getAllRoles, getRoleById, createRole, updateRoleById, deleteRoleById } from './../controllers/roleController.js';

export const roleRouter = Router();

roleRouter.get('/:id', getRoleById);
roleRouter.get('/', getAllRoles);
roleRouter.post('/', createRole);
roleRouter.put('/:id', updateRoleById);
roleRouter.delete('/:id', deleteRoleById);