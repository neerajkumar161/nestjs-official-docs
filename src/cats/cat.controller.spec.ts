import { Test } from '@nestjs/testing'
import { Cat } from 'src/schema/cat.schema'
import { CatsController } from './cats.controller'
import { CatsService } from './cats.service'
describe('CatsController', () => {
  let catsController: CatsController
  let catService: CatsService

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService]
    }).compile()

    catService = moduleRef.get<CatsService>(CatsService)
    catsController = moduleRef.get<CatsController>(CatsController)
  })

  describe('findAll', () => {
    test('should return an array of cats', async () => {
      const result: Cat[] = [{ id: 1, name: 'Test', age: 12, breed: 'unknown' }]

      jest
        .spyOn(catService, 'findAll')
        .mockImplementation(async () => await result)

      const expectRes = await catsController.findAll()
      console.log(expectRes)
      expect(expectRes).toBe(result)
    })
  })
})
