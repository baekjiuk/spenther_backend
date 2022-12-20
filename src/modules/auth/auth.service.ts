import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import bcryptjs from 'bcryptjs';
import { Repository } from 'typeorm';

import { User } from 'src/modules/user/user.entity';

@Injectable()
export class AuthService {
  @InjectRepository(User)
  private userRepo: Repository<User>;

  @Inject(ConfigService)
  private configService: ConfigService;

  @Inject(JwtService)
  private jwtService: JwtService;

  private genHashPassword(password: string) {
    if (!password) {
      return null;
    }
    const salt = this.configService.get('auth.salt');
    return bcryptjs.hashSync(password, salt);
  }

  async authentificate(payload: any) {
    const { id } = payload;
    const user = await this.userRepo.findOneBy({ id });
    if (!user) {
      throw Error('Invalid User');
    }
    return user;
  }

  async validateUser(email: string, password: string) {
    const user = await this.userRepo.findOneBy({ email });
    if (!user) {
      throw Error('Invalid User');
    }
    if (!bcryptjs.compareSync(password, user.password)) {
      throw Error('Invalid User');
    }
    return user;
  }

  async signUp(email: string, password: string) {
    const signed = await this.userRepo.findOneBy({ email });
    if (signed) {
      throw Error('Already Signed');
    }

    const user = this.userRepo.create({ email, password: this.genHashPassword(password) });
    await this.userRepo.save(user);
    return this.jwtService.sign(user.payload());
  }

  async signIn(email: string, password: string) {
    const user = await this.validateUser(email, password);
    return this.jwtService.sign(user.payload());
  }
}
