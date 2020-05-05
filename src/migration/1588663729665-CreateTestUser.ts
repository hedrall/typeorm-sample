import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTestUser1588663729665 implements MigrationInterface {
  name = 'CreateTestUser1588663729665';

  public async up( queryRunner: QueryRunner ): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `test_user` (`username` varchar(20) NOT NULL, `email` varchar(50) NOT NULL, `age` int NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `create_date` varchar(10) AS (date_format(created_at,\'%Y%m%d\')) STORED NOT NULL, PRIMARY KEY (`username`, `email`)) ENGINE=InnoDB',
      undefined
    );
  }

  public async down( queryRunner: QueryRunner ): Promise<void> {
    await queryRunner.query( 'DROP TABLE `test_user`', undefined );
  }
}
