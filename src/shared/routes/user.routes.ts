import UserController from '@modules/userSample/controllers/UserController';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

const userRoutes = Router();
const userController = new UserController();

userRoutes
  .route('/')
  .post(
    celebrate({
      [Segments.BODY]: {
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.string().required(),
        password: Joi.string().required(),
        age: Joi.number().positive().required(),
        admin: Joi.bool().required(),
      },
    }),
    userController.create,
  )
  .get(userController.list);

userRoutes
  .route('/:id')
  .put(
    celebrate({
      [Segments.PARAMS]: { id: Joi.string().required() },
      [Segments.BODY]: {
        name: Joi.string(),
        email: Joi.string().email(),
        phone: Joi.string(),
        password: Joi.string(),
        age: Joi.number().positive(),
        admin: Joi.bool(),
      },
    }),
    userController.update,
  )
  .get(
    celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
    userController.find,
  )
  .delete(
    celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
    userController.remove,
  );

export default userRoutes;