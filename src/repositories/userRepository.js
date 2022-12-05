const { User } = require('../models');

class UserRepository {
  static async getEmail({ email }) {
    const getUser = await User.findOne({ where: { email } });

    return getUser
  }

  static async create({ username, email, password, role }) {
    const createUser = User.create({
      username, email, password, role,
    });

    return createUser;
  }
}

module.exports = UserRepository;