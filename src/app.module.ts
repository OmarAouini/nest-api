import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { OrmTransactionsSubscriber } from './orm_transactions.subscribe';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'shop',
      entities: [User],
      synchronize: true,
      autoLoadEntities: true,
      subscribers: [OrmTransactionsSubscriber],
      extra: {
        connectionLimit: 20,
      },
    }),
  ],
  controllers: [AppController],
  providers: [OrmTransactionsSubscriber],
})
export class AppModule {}
