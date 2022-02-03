import { MigrationInterface, QueryRunner } from 'typeorm';

export class sampleSeedUser1643847500325 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'INSERT INTO users (id, name, phone, age, email, password, admin) VALUES ("e0eb3253-60de-45c3-901f-16f3346ce537", "Admin", "11111", 99, "admin@sample.com", "admin", true)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DELETE FROM users WHERE name = 'Admin'");
  }
}
