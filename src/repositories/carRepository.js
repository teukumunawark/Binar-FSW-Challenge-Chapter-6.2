const { Car } = require('../models');

class CarRepository {
  static async create({
    plate, manufacture, model, rentPerDay, capacity,
    image, description, transmission, available,
    type, year, availableAt
  }) {
    const createCar = await Car.create({
      plate, manufacture, model, rentPerDay, capacity,
      image, description, transmission, available,
      type, year, availableAt,
    });
    return createCar;
  }

  static async getAll() {
    const getAllCars = await Car.findAll();

    return getAllCars;
  }

  static async getById({ id }) {
    const getCarById = await Car.findOne({ where: { id } });

    return getCarById;
  }

  static async update({
    id, plate, manufacture, model, rentPerDay, capacity,
    image, description, transmission, available,
    type, year, availableAt
  }) {
    const updateCar = await Car.update({
      plate, manufacture, model, rentPerDay, capacity,
      image, description, transmission, available,
      type, year, availableAt
    }, { where: { id } });

    return updateCar;
  }

  static async delete({ id }) {
    const deletedCar = await Car.destroy({ where: { id } });

    return deletedCar;
  }
}

module.exports = CarRepository;