import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1671520301296 implements MigrationInterface {
  name = 'init1671520301296';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "email" text NOT NULL, "password" text, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "expenditures" ("createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "title" text NOT NULL, "creatorId" uuid, CONSTRAINT "PK_876c24b19b0a53d9be374ab93b3" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "expenditure_detail" ("createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "amount" integer NOT NULL, "description" text NOT NULL, "tag" text NOT NULL, "tagColor" text NOT NULL, "expenditureId" uuid, CONSTRAINT "PK_c0303da3b4818c521a7e4431a86" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "expenditure_members" ("createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "expenditureId" uuid, "memberId" uuid, CONSTRAINT "PK_f29192e5f65892ad1a3cc0c96db" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "expenditures" ADD CONSTRAINT "FK_47be4e218a47d60e8dd1f36b93c" FOREIGN KEY ("creatorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "expenditure_detail" ADD CONSTRAINT "FK_2d435728ac517157cf44c4c1004" FOREIGN KEY ("expenditureId") REFERENCES "expenditures"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "expenditure_members" ADD CONSTRAINT "FK_8670092b569c291b5f254347c16" FOREIGN KEY ("expenditureId") REFERENCES "expenditures"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "expenditure_members" ADD CONSTRAINT "FK_8a8fe65eed5597f5a6ba7455f3e" FOREIGN KEY ("memberId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "expenditure_members" DROP CONSTRAINT "FK_8a8fe65eed5597f5a6ba7455f3e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "expenditure_members" DROP CONSTRAINT "FK_8670092b569c291b5f254347c16"`,
    );
    await queryRunner.query(
      `ALTER TABLE "expenditure_detail" DROP CONSTRAINT "FK_2d435728ac517157cf44c4c1004"`,
    );
    await queryRunner.query(
      `ALTER TABLE "expenditures" DROP CONSTRAINT "FK_47be4e218a47d60e8dd1f36b93c"`,
    );
    await queryRunner.query(`DROP TABLE "expenditure_members"`);
    await queryRunner.query(`DROP TABLE "expenditure_detail"`);
    await queryRunner.query(`DROP TABLE "expenditures"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
