import { inject, injectable } from 'tsyringe';
import IUserRepository from '../database/repositoriesInterface/IUserRepository';
import User from '../database/typeorm/entities/User';

@injectable()
export default class ListUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute(): Promise<User[]> {
    const usersList = await this.userRepository.list();
    return usersList;
  }
}
