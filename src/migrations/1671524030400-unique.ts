import { MigrationInterface, QueryRunner } from 'typeorm';

export class unique1671524030400 implements MigrationInterface {
  name = 'unique1671524030400';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "expenditure_members" ADD CONSTRAINT "UQ_b13000a782a2c40295b2bf20555" UNIQUE ("expenditureId", "memberId")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "expenditure_members" DROP CONSTRAINT "UQ_b13000a782a2c40295b2bf20555"`,
    );
  }
}
