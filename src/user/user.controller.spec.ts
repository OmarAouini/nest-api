import { Test } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [UserController], // Add
      providers: [UserService], // Add
    }).compile();

    userController = moduleRef.get<UserController>(UserController);
  });

  it('should return user list', () => {
    expect(userController).toBeDefined();
  });

  it('should return a single user', () => {
    expect(userController).toBeDefined();
  });
});
