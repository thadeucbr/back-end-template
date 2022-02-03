import { inject, injectable } from 'tsyringe';
import IUserRepository from '../database/repositoriesInterface/IUserRepository';

@injectable()
export default class RemoveUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(id: any): Promise<void> {
    this.userRepository.remove(id);
  }
}