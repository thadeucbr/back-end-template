import { inject, injectable } from 'tsyringe';
import IUserRepository from '../database/repositoriesInterface/IUserRepository';
import User from '../database/typeorm/entities/User';

@injectable()
export default class FindUserByIdService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute(id: any): Promise<User> {
    const user = await this.userRepository.find(id);
    return user;
  }
}
