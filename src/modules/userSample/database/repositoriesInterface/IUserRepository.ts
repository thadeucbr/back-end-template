import { ICreateUserDTO, IUpdateUserDTO } from '@modules/userSample/dto/IUserDTO';
import User from '../typeorm/entities/User';

export default interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  list(): Promise<User[]>;
  find(id: string): Promise<User>;
  remove(id: any): void;
  update(data: IUpdateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
}