const carService = require('../services/carService');

const createController = async (req, res) => {

  const userID = req.user.id;

  console.log(userID)

  const { plate, manufacture, model, rentPerDay,
    capacity, image, description, transmission,
    available, type, year, availableAt } = req.body;

  const { status, status_code, message, data } = await carService.createCar({
    plate, manufacture, model, rentPerDay,
    capacity, image, description, transmission,
    available, type, year, availableAt, userID
  });

  res.status(status_code).send({
    status: status,
    message, message,
    data: data,
  });
}

const getAllController = async (req, res) => {
  const { status, status_code, message, data } = await carService.getAllCars();

  res.status(status_code).send({
    status: status,
    message, message,
    data: data,
  });
}

const getByIdController = async (req, res) => {
  const { id } = req.params;

  const { status, status_code, message, data } = await carService.getCarById({ id });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
}

const updateController = async (req, res) => {
  const { id } = req.params;

  const userID = req.user.id;

  const {
    plate, manufacture, model, rentPerDay,
    capacity, image, description, transmission,
    available, type, year, availableAt
  } = req.body;

  const { status, status_code, message, data } = await carService.updateCar(
    {
      id, plate, manufacture, model, rentPerDay,
      capacity, image, description, transmission,
      available, type, year, availableAt, userID,
    }
  );

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
}

const deleteController = async (req, res) => {
  const { id } = req.params;
  const userID = req.user.id;

  const {
    status,
    status_code,
    message,
    data
  } = await carService.deleteCar({ id, userID });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
}

module.exports = {
  createController,
  getAllController,
  getByIdController,
  updateController,
  deleteController
};