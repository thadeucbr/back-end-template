import { inject, injectable } from 'tsyringe';
import IUserRepository from '../database/repositoriesInterface/IUserRepository';
import User from '../database/typeorm/entities/User';
import { IUpdateUserDTO } from '../dto/IUserDTO';

@injectable()
export default class UpdateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute(data: IUpdateUserDTO): Promise<User> {
    const updatedUser = await this.userRepository.update(data);
    return updatedUser;
  }
}
