module.exports = [
  {
    name: 'default', // 標準で読み込まれる設定
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'docker',
    password: 'docker',
    database: 'test',
    synchronize: false,
    logging: false,
    connectTimeout: 30 * 1000,
    acquireTimeout: 30 * 1000,
    entities: [__dirname + '/dist/entity/**/*.js'],
    migrations: [__dirname + '/dist/migration/**/*.js'],
    // 今回subscriberは扱いません。
    // subscribers: [__dirname + '/dist/subscriber/**/*.js'],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      // subscribersDir: 'src/subscriber'
    }
  },
];
