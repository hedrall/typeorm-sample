import { createConnection } from 'typeorm';
import { TestUser } from './entity/TestUser';

( async () => {
  // MySQLと接続
  const connection = await createConnection( 'default' );

  // データを挿入する
  const result = await connection.manager.find( TestUser, { age: 20 } );

  console.table( ( result as any )[0]['created_at'] );
  console.table( ( result as any )[0]['created_at'] instanceof Date );

  await connection.close();
} )().catch( e => console.log( e ) );
