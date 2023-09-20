import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1695170769941 implements MigrationInterface {
    name = 'Default1695170769941'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog_post" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "blog_post" ADD "content" text array NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog_post" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "blog_post" ADD "content" text NOT NULL`);
    }

}
