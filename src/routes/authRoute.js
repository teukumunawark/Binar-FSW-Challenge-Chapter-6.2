const router = require('express').Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddlewares');

router.post('/user/register', authController.registerController);
router.post('/user/login', authController.loginController);

router.post('/admin/register', authController.registerController);
router.post('/admin/login', authController.loginController);



router.get(
  '/me', 
  authMiddleware.authenticate, 
  authController.currentUser
);

module.exports = router;