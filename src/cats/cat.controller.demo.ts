// This is Just Demo
import { Body, Controller, Get, HttpCode, Post, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'
import { Observable, of } from 'rxjs'
import { User } from 'src/decorators/user.decorator'
import { CatsService } from './cats.service'
import { CreateCatDto } from './dto/create-cat.dto'

@Controller('cats')
export class CatsDemoController {
  constructor(private catService: CatsService) {}
  // Recommended way
  // @UseFilters(new HttpExceptionFilter())
  @Post()
  @HttpCode(200) // default 200
  createCat(): any {
    // throw new ForbiddenException();
    return { message: 'This will create a cat!' }
  }

  @Get()
  findAll(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
    @User('name') name: string,
    @Body() body: CreateCatDto
  ): Response {
    console.log('UserName', name)
    console.log(req.body, req.params, req.query)
    console.log(body)
    const result = 'Returning ALL cats from GET-findALL'
    return res.status(200).json(result)
  }

  @Get('ab*cd')
  getAnyRoute(@Req() req: Request): void {
    console.log('This will get any route for ab_cd, wildcard!')
    console.log(req.url)
  }

  @Get('observable')
  observable(): Observable<any[]> {
    return of([])
  }
}
