import IUserRepository from '@modules/userSample/database/repositoriesInterface/IUserRepository';
import UserRepository from '@modules/userSample/database/typeorm/repositories/UserRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository
);