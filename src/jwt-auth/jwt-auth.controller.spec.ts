import { Test, TestingModule } from '@nestjs/testing';
import { JwtAuthController } from './jwt-auth.controller';
import { JwtAuthService } from './jwt-auth.service';

describe('JwtAuthController', () => {
  let controller: JwtAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JwtAuthController],
      providers: [JwtAuthService],
    }).compile();

    controller = module.get<JwtAuthController>(JwtAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
