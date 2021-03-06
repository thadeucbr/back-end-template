import UserController from '@modules/userSample/controllers/UserController';
import { TokenValidation } from '@shared/middlewares';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

const userRoutes = Router();
const userController = new UserController();
const validation = new TokenValidation();

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
  .get(validation.adminRoute,userController.list);

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

userRoutes.post(
  '/login',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  userController.login
);

export default userRoutes;
