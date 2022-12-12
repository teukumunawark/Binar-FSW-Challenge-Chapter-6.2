const { Car } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class CarRepository {
  static async create({
    plate, manufacture, model, rentPerDay, capacity,
    image, description, transmission, available,
    type, year, availableAt, userID
  }) {
    const createCar = await Car.create(
      {
        plate, manufacture, model, rentPerDay, capacity,
        image, description, transmission, available,
        type, year, availableAt,
      },
    );
    console.log(createCar.deletedAt);
    return createCar;
  }

  static async getAll() {
    const getAllCars = await Car.findAll({
      where: {
        deletedAt: {
          [Op.is]: null
        }
      },
    });

    return getAllCars;
  }

  static async getById({ id }) {
    const getCarById = await Car.findOne({
      where: {
        id,
        deletedAt: {
          [Op.is]: null
        }
      }
    });

    return getCarById;
  }

  static async update({
    id, plate, manufacture, model, rentPerDay, capacity,
    image, description, transmission, available,
    type, year, availableAt
  }) {
    const updateCar = await Car.update(
      {
        plate, manufacture, model, rentPerDay, capacity,
        image, description, transmission, available,
        type, year, availableAt
      },
      { where: { id } },
    );

    return updateCar;
  }

  static async delete({ id, userID }) {
    const deletedCar = await Car.update(
      {
        deletedAt: new Date().getTime(),
      },
      { where: { id } }
    );

    return deletedCar;
  }
}

module.exports = CarRepository;