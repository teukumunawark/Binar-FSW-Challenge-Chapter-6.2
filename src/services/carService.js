const carRepository = require('../repositories/carRepository');

class CarService {
  static async createCar({
    plate, manufacture, model, rentPerDay,
    capacity, image, description, transmission,
    available, type, year, availableAt
  }) {
    try {
      if (!plate) {
        return {
          status: false,
          status_code: 400,
          message: "Plate mobil wajib diisi.",
          data: { car: null }
        };
      };

      if (!manufacture) {
        return {
          status: false,
          status_code: 400,
          message: "Manufacture mobil wajib diisi.",
          data: { car: null }
        };
      };

      if (!model) {
        return {
          status: false,
          status_code: 400,
          message: "Model mobil wajib diisi.",
          data: { car: null }
        };
      };

      if (!rentPerDay) {
        return {
          status: false,
          status_code: 400,
          message: "Biaya Rental wajib diisi.",
          data: { car: null }
        };
      };

      if (!capacity) {
        return {
          status: false,
          status_code: 400,
          message: "Kapasitas mobil wajib diisi.",
          data: { car: null }
        };
      };

      if (!image) {
        return {
          status: false,
          status_code: 400,
          message: "Gambar mobil wajib diisi.",
          data: { car: null }
        };
      };

      if (!description) {
        return {
          status: false,
          status_code: 400,
          message: "Deskripsi mobil wajib diisi.",
          data: { car: null }
        };
      };

      if (!transmission) {
        return {
          status: false,
          status_code: 400,
          message: "Jenis Transmisi mobil wajib diisi.",
          data: { car: null }
        };
      };

      if (!type) {
        return {
          status: false,
          status_code: 400,
          message: "Tipe mobil wajib diisi.",
          data: { car: null }
        };
      };

      if (!year) {
        return {
          status: false,
          status_code: 400,
          message: "Tahun mobil wajib diisi.",
          data: { car: null }
        };
      };

      if (!year) {
        return {
          status: false,
          status_code: 400,
          message: "Satatu ketersedian mobil wajib diisi.",
          data: { car: null }
        };
      };

      if (!availableAt) {
        return {
          status: false,
          status_code: 400,
          message: "Status ketersedian sekarang wajib diisi.",
          data: { car: null }
        };
      };

      const createCar = await carRepository.create({
        plate, manufacture, model, rentPerDay,
        capacity, image, description, transmission,
        available, type, year, availableAt
      });

      return {
        status: true,
        status_code: 201,
        message: "Car created successfully",
        data: { car: createCar }
      };

    } catch (error) {
      return {
        status: false,
        status_code: 500,
        message: error.message,
        data: { car: null },
      };
    }
  }

  static async getAllCars() {
    try {
      const getAll = await carRepository.getAll();
      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: getAll
      };
    } catch (error) {
      return {
        status: false,
        status_code: 500,
        message: error.message,
        data: {
          car: null,
        },
      };
    }
  }

  static async getCarById({ id }) {
    try {
      const getCarById = await carRepository.getById({ id });

      if (!getCarById) {
        return {
          status: false,
          status_code: 400,
          message: "id tidak ditemukan",
          data: null
        };
      };

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: getCarById
      }

    } catch (error) {
      return {
        status: false,
        status_code: 500,
        message: error.message,
        data: null,
      };
    }
  }

  static async updateCar({
    id, plate, manufacture, model, rentPerDay, capacity,
    image, description, transmission, available,
    type, year, availableAt,
  }) {
    try {
      const updateCar = await carRepository.update({
        id, plate, manufacture, model, rentPerDay, capacity,
        image, description, transmission, available,
        type, year, availableAt,
      });

      return {
        status: true,
        status_code: 200,
        message: "Car update successfully",
        data: { car: updateCar }
      };


    } catch (error) {
      return {
        status: false,
        status_code: 500,
        message: error.message,
        data: { car: null }
      }
    }
  }

  static async deleteCar({ id, userID }) {
    try {
      const deletedCar = await carRepository.delete({ id });
      return {
        status: true,
        status_code: 200,
        message: "deleted successfully",
        data: { car: deletedCar }
      };

    } catch (error) {
      return {
        status: false,
        status_code: 500,
        message: error.message,
        data: { car: null }
      }
    }
  }
}

module.exports = CarService;