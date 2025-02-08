import Computadora from "../models/computadoras.model.js";
const computadorasDao = {};

computadorasDao.getAll = async () => {
    return await Computadora.find();
};

// Función que ayuda a devolver una sola computadora
computadorasDao.getOne = async (customId) => {
    return await Computadora.findOne({ customId: customId});
};

// Esta función inserta una nueva computadora
computadorasDao.insert = async (computadora) => {
    return await Computadora.create(computadora);
};

computadorasDao.updateOne = async (computadora,customId) => {
    return await Computadora.findOneAndUpdate({ customId: customId }, computadora);
};

computadorasDao.deleteOne = async (customId) => {
    return await Computadora.deleteOne({ customId: customId });
};

export default computadorasDao;
