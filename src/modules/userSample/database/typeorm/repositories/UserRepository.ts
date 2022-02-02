import { ICreateUserDTO } from '@modules/userSample/dto/IUserDTO';
import { getRepository, Repository } from 'typeorm';
import IUserRepository from '../../repositoriesInterface/IUserRepository';
import User from '../entities/User';

export default class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  };

  public async create(data: ICreateUserDTO): Promise<User> {
      const user = this.ormRepository.create(data);
      await this.ormRepository.save(user);
      return user;
  };

  public async list(): Promise<User[]> {
      const users = await this.ormRepository.find()
      return users;
  };

  public async find(id: any): Promise<User> {
      const user = await this.ormRepository.findOne(id);
      return user;
  };

  async remove(id: any): Promise<void> {
      await this.ormRepository.delete(id);
  }
}