/* 
    Rutas de tasks / tasks
    host + /api/tasks
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { fieldsValidators } = require('../middlewares/fields-validators');
const { getAllTasks, createTask, editTask, deleteTask } = require('../controllers/tasks');

// Obtener todos las tasks
router.get('/', getAllTasks );

// Obtener una task by id GET
router.get('/:id', getTaskById);

// Agregar un Task POST
router.post(
    '/',
    [
        check('title', 'El title es obligatorio').not().isEmpty(),
        check('description', 'La descripcion es obligatoria').not().isEmpty(),
        check('status', 'El estado es obligatorio').not().isEmpty(),
        fieldsValidators,
    ],
    createTask
);

// Editar un task by id PUT
router.put('/:id', editTask );

// Eliminar un task by id DELETE
router.delete('/:id', deleteTask );


module.exports = router;
