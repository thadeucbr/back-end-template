import { inject, injectable } from 'tsyringe';
import IUserRepository from '../database/repositoriesInterface/IUserRepository';
import argon2 from 'argon2';
import AppError from '@shared/errors/AppError';
import jwt from 'jsonwebtoken';
import config from '@shared/config/jwt/config';
import { publicKey } from '@shared/config/jwt/readKey';

@injectable()
export default class LoginService {
  constructor(
    @inject('UserRepository') private userRepository: IUserRepository,
  ) {}

  private async verifyPassword({ email, password }) {
    const userData = await this.userRepository.findByEmail(email);
    const validPassword = await argon2.verify(userData.password, password);
    if (!validPassword) throw new AppError('Invalid user', 401)
    return userData.id;
  }

  private generateToken(userId: string) {
    const token = jwt.sign({ sub: userId }, publicKey, config)
    return token;

  }
  async execute(data: { email: string, password: string }): Promise<string> {
    const userId = await this.verifyPassword(data);
    const token = this.generateToken(userId);
    return token;
  }
}
