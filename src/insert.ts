import { createConnection } from 'typeorm';
import { TestUser } from './entity/TestUser';

( async () => {
  // MySQLと接続
  const connection = await createConnection( 'default' );
  
  // データを挿入する
  await connection.manager.getId( TestUser, [
    {
      username: 'user1',
      email: 'email1@example.com',
      age: 20
    },
    {
      username: 'user2',
      email: 'email2@example.com',
    }
  ] );
  
  await connection.close();
} )().catch( e => console.log( e ) );