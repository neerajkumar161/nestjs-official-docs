import { Test } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
describe('CatsController', () => {
  let catsController: CatsController;
  let catService: CatsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    catService = moduleRef.get<CatsService>(CatsService);
    catsController = moduleRef.get<CatsController>(CatsController);
  });

  describe('findAll', () => {
    test('should return an array of cats', async () => {
      const result: Cat[] = [
        { id: 1, name: 'Test', age: 12, breed: 'unknown' },
      ];

      jest.spyOn(catService, 'findAll').mockImplementation(() => result);

      const expectRes = await catsController.findAll();
      console.log(expectRes);
      expect(expectRes).toBe(result);
    });
  });
});
