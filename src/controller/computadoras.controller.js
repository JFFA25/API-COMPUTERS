import computadorasDao from '../dao/computadoras.dao.js';

const computadorasController = {};

// Obtener todas las computadoras
computadorasController.getAll = (req, res) => {
    computadorasDao.getAll()
        .then((computadoras) => {
            res.render('../src/views/index.ejs', { computadoras });
        })
        .catch((error) => {
            res.json({
                data: {
                    message: error.message || 'Some error occurred while retrieving computadoras.'
                }
            });
        });
};

// Obtener una computadora por customId
computadorasController.getOne = (req, res) => {
    computadorasDao.getOne(req.params.customId) // Cambié barcode por customId
        .then((computadora) => {
            res.render('../src/views/edit.ejs', { computadora });
        })
        .catch((error) => {
            res.json({
                data: {
                    message: error.message || 'Some error occurred while retrieving computadora.'
                }
            });
        });
};

// Insertar una nueva computadora
computadorasController.insert = (req, res) => {
    console.log(req.body); // Verifica que los datos estén llegando correctamente
    computadorasDao.insert(req.body)
        .then(() => {
            res.redirect('/exam_db/computadoras/getAll');
        })
        .catch((error) => {
            res.json({
                data: {
                    message: error.message || 'Some error occurred while inserting computadora.'
                }
            });
        });
};

// Actualizar una computadora
computadorasController.updateOne = (req, res) => {
    computadorasDao.updateOne(req.body, req.params.customId) // Cambié barcode por customId
        .then((result) => {
            res.json({
                data: {
                    message: 'Computadora updated successfully',
                    result: result
                }
            });
        })
        .catch((error) => {
            res.json({
                data: {
                    message: error.message || 'Some error occurred while updating computadora.'
                }
            });
        });
};

// Eliminar una computadora
computadorasController.deleteOne = (req, res) => {
    computadorasDao.deleteOne(req.params.customId) // Cambié barcode por customId
        .then(() => {
            res.redirect('/exam_db/computadoras/getAll');
        })
        .catch((error) => {
            res.json({
                data: {
                    message: error.message || 'Some error occurred while deleting computadora.'
                }
            });
        });
};

export default computadorasController;
