import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../user/user.entity';
import { ExpenditureDetail } from './expenditure-detail.entity';
import { ExpenditureMember } from './expenditure-member.entity';
import { Expenditure } from './expenditure.entity';

@Injectable()
export class ExpenditureService {
  @InjectRepository(User)
  private userRepo: Repository<User>;

  @InjectRepository(Expenditure)
  private expenditureRepo: Repository<Expenditure>;

  @InjectRepository(ExpenditureDetail)
  private expenditureDetailRepo: Repository<ExpenditureDetail>;

  @InjectRepository(ExpenditureMember)
  private expenditureMemberRepo: Repository<ExpenditureMember>;

  async createExpenditure(title: string, creator: User) {
    console.log(creator);
    const expenditure = this.expenditureRepo.create({ title, creator });
    return this.expenditureRepo.save(expenditure);
  }

  async createExpenditureDetail(expenditureId: string, data: any) {
    const expenditure = await this.expenditureRepo.findOneBy({ id: expenditureId });
    if (!expenditure) {
      throw Error('Invalid Expenditure');
    }
    const detail = this.expenditureDetailRepo.create({ expenditure, ...data });
    return this.expenditureDetailRepo.save(detail);
  }

  async inviteMember(expenditureId: string, email: string) {
    const inviteTarget = await this.userRepo.findOneBy({ email });
    if (!inviteTarget) {
      throw Error('Invalid User');
    }

    const expenditure = await this.expenditureRepo.findOneBy({ id: expenditureId });
    if (!expenditure) {
      throw Error('Invalid Expenditure');
    }

    const invited = await this.expenditureMemberRepo.findOne({
      where: {
        expenditure: { id: expenditure.id },
        member: { id: inviteTarget.id },
      },
    });
    if (invited) {
      throw Error('Already invite member');
    }

    const expenditureMember = this.expenditureMemberRepo.create({
      expenditure,
      member: inviteTarget,
    });
    return this.expenditureMemberRepo.save(expenditureMember);
  }
}
