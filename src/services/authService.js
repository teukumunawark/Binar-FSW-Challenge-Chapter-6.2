const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT } = require('../lib/const');

const SALT_ROUND = 10;

class AuthService {
  static async register({ username, email, password, role }) {
    try {
      if (!username) {
        return {
          status: false,
          status_code: 400,
          message: "User Name Wajib diisi",
          data: null,
        };
      };
      if (!email) {
        return {
          status: false,
          status_code: 400,
          message: "Email Wajib diisi",
          data: null,
        };
      };

      if (!role) {
        return {
          status: false,
          status_code: 400,
          message: "Role Wajib diisi",
          data: null,
        };
      };

      if (!password) {
        return {
          status: false,
          status_code: 400,
          message: "Password Wajib diisi",
          data: null,
        };
      } else if (password.length < 8) {
        return {
          status: false,
          status_code: 400,
          message: "Password minimal harus 8 karakter",
          data: null,
        };
      }

      const getUserByEmail = await userRepository.getEmail({ email });

      if (getUserByEmail) {
        return {
          status: false,
          status_code: 400,
          message: "Email ini sudah digunakan",
          data: null
        };
      } else {
        const hashPassword = await bcrypt.hash(password, SALT_ROUND);
        const createdUser = await userRepository.create({
          username, email, password: hashPassword, role,
        });

        return {
          status: true,
          status_code: 201,
          message: "Berhasil mendaftarkan user",
          data: createdUser,
        };
      }
    } catch (error) {
      return {
        status: false,
        status_code: 500,
        message: error.message,
        data: null
      }
    }
  }

  static async login({ email, password }) {
    try {
      if (!email) {
        return {
          status: false,
          status_code: 400,
          message: "Email Wajib diisi",
          data: null,
        };
      };
      if (!password) {
        return {
          status: false,
          status_code: 400,
          message: "Password Wajib diisi",
          data: null,
        };
      } else if (password.length < 8) {
        return {
          status: false,
          status_code: 400,
          message: "Password minimal harus 8 karakter",
          data: null,
        };
      }

      const getUser = await userRepository.getEmail({ email });

      if (!getUser) {
        return {
          status: false,
          status_code: 400,
          message: "Email belum terdaftar",
          data: null
        };
      } else {
        const isPasswordMatch = await bcrypt.compare(
          password, getUser.password
        );

        if (isPasswordMatch) {
          const token = jwt.sign(
            {
              id: getUser.id,
              email: getUser.email,
            },
            JWT.SECRET,
            {
              expiresIn: JWT.EXPIRED,
            }
          );
          return {
            status: true,
            status_code: 200,
            message: "Success login",
            data: { token }
          };
        } else {
          return {
            status: false,
            status_code: 400,
            message: "Wrong password",
            data: null,
          };
        };
      };
    } catch (error) {
      return {
        status: false,
        status_code: 500,
        message: error.message,
        data: null,
      };
    }
  }
}

module.exports = AuthService;