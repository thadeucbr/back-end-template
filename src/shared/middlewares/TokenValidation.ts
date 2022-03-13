import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { publicKey } from '@shared/config/jwt/readKey';
import AppError from '@shared/errors/AppError';
import { container } from 'tsyringe';
import FindUserByIdService from '@modules/userSample/services/FindUserByIdService';
import User from '@modules/userSample/database/typeorm/entities/User';

interface RequestToken extends Request {
  user: User;
}

export default class TokenValidation {
  async userRoute(req: RequestToken, _res: Response, next: NextFunction) {
    const findUserById = container.resolve(FindUserByIdService);
    const { authorization } = req.headers;
    try {
      const payload = jwt.verify(authorization, publicKey, {
        algorithms: ['RS256'],
      });
      const userData = await findUserById.execute(payload.sub);
      if (userData === undefined) throw new AppError('Token inválido', 403)
      req.user = userData;
      next()
    } catch (error) {
      throw new AppError(error.message, 400);
    }
  }
  async adminRoute(req: RequestToken, _res: Response, next: NextFunction) {
    const findUserById = container.resolve(FindUserByIdService);
    const { authorization } = req.headers;
    try {
      const payload = jwt.verify(authorization, publicKey, {
        algorithms: ['RS256'],
      });
      const userData = await findUserById.execute(payload.sub);
      if (userData === undefined) throw new AppError('Token inválido', 403)
      if (userData.admin === false) throw new AppError('Token inválido', 401)
      req.user = userData;
      next()
    } catch (error) {
      throw new AppError(error.message, 400);
    }
  }
}
