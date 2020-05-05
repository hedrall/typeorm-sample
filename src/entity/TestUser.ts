import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class TestUser {
  // ユーザ名, VARCHAR(20)型
  // デコレータの引数で型を定義できる
  // string型の変数に関してデフォルトではvarchar(255)型になるため、lengthをつけて宣言することもできる
  @PrimaryColumn( { type: 'varchar', length: 20 } )
  username: string
  
  // emailアドレス, VARCHAR(50)型
  @PrimaryColumn( { type: 'varchar', length: 50 } )
  email: string
  
  // emailアドレス, INT型
  @Column( { nullable: true } )
  age?: number

  // レコードの作成時間, timestamp型
  @CreateDateColumn()
  created_at?: string

  // レコードの更新時間, timestamp型
  @UpdateDateColumn()
  updated_at?: string

  // 例えば自動生成列の定義も可能, VARCHAR(10)型
  @Column( {
    type: 'varchar',
    length: 10,
    generatedType: 'STORED',
    asExpression: 'date_format(created_at,\'%Y%m%d\')'
  } )
  create_date?: string

  constructor( options: TestUser ) {
    Object.assign( this, options );
  }
}