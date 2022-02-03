import { Request, Response } from 'express';
import { container } from 'tsyringe';
import userService from '../services';

export default class UserController {
  async create(request: Request, response: Response): Promise<Response> {
    const { body } = request;
    const createUser = container.resolve(userService.create);
    const newUser = await createUser.execute(body);

    return response.status(201).json(newUser);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { body } = request;
    const { id } = request.params;

    const updateUser = container.resolve(userService.update);
    const updatedUser = await updateUser.execute({ id, body });

    return response.status(200).json(updatedUser);
  }

  async list(_request: Request, response: Response): Promise<Response> {
    const listUser = container.resolve(userService.list);
    const usersList = await listUser.execute();

    return response.status(200).json(usersList);
  }

  async remove(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const removeUser = container.resolve(userService.remove);
    await removeUser.execute(id);

    return response.status(204).json({});
  }

  async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findUser = container.resolve(userService.find);
    const foundUser = await findUser.execute(id);

    return response.status(200).json(foundUser);
  }
}
