import { ICreateUserDTO } from '@modules/userSample/dto/IUserDTO';
import User from '../typeorm/entities/User';

export default interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  list(): Promise<User[]>;
  find(id: Number): Promise<User>;
  remove(id: Number): void;
};