import {
  ICreateUserDTO,
  IUpdateUserDTO,
} from '@modules/userSample/dto/IUserDTO';
import argon2 from 'argon2';
import { getRepository, Repository } from 'typeorm';
import IUserRepository from '../../repositoriesInterface/IUserRepository';
import User from '../entities/User';

export default class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findByEmail(email: string): Promise<User> {
    const userData = await this.ormRepository.findOne({ where: { email }})
    return userData;
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const userData = data;
    userData.password = await argon2.hash(data.password, { type: argon2.argon2d });
    
    const user = this.ormRepository.create(userData);
    await this.ormRepository.save(user);
    
    return user;
  }

  public async list(): Promise<User[]> {
    const users = await this.ormRepository.find();
    return users;
  }

  public async find(id: any): Promise<User> {
    const user = await this.ormRepository.findOne(id);
    return user;
  }

  public async remove(id: any): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async update(data: IUpdateUserDTO): Promise<User> {
    const { id, body } = data;
    const updatedUser = await this.ormRepository.update({ id }, body);
    return updatedUser.raw;
  }
}
