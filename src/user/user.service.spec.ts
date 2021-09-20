import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { OrmTransactionsSubscriber } from '../orm_transactions.subscribe';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, OrmTransactionsSubscriber],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
