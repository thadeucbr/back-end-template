import { inject, injectable } from 'tsyringe';
import IUserRepository from '../database/repositoriesInterface/IUserRepository';
import User from '../database/typeorm/entities/User';
import { ICreateUserDTO } from '../dto/IUserDTO';

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ){}
  
  public async execute(data: ICreateUserDTO): Promise<User> {
    const user = await this.userRepository.create(data);
    return user;
  }
}