import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '../services/CreateUserService';

export default class UserController {
  async create (request: Request, response: Response): Promise<Response> {
    const { body } = request;
    const createUser = container.resolve(CreateUserService);
    const newUser = await createUser.execute(body);

    return response.status(201).json(newUser);
  }
}