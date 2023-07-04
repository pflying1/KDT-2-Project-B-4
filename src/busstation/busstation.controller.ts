import { Controller, Get, Post, Body } from '@nestjs/common';
import { BusstationService } from './busstation.service';
import { Bus } from './busstation.model';

@Controller('busstation')
export class BusstationController {
  constructor(private readonly busstationService: BusstationService) { }

  @Get()
  async findAllBusStops(): Promise<Bus[]> {
    const data = await this.busstationService.findAllBusStops();
    console.log('서버 컨트롤러:', data);
    return data;
  }

  @Post('search')
  async searchBusStops(@Body('value') value: string): Promise<Bus[]> {
    const data = await this.busstationService.searchBusStops(value);
    console.log('서버 컨트롤러:', data);
    return data;
  }

}
