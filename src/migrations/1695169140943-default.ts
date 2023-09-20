import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1695169140943 implements MigrationInterface {
    name = 'Default1695169140943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "blog_post" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(100) NOT NULL, "imageUrl" character varying NOT NULL, "content" text NOT NULL, "likes" integer NOT NULL DEFAULT '0', "readingTimeMin" integer NOT NULL DEFAULT '1', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_694e842ad1c2b33f5939de6fede" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "blog_post"`);
    }

}
