import { Controller,Get } from '@nestjs/common';
import { BusstationService } from './busstation.service';
import { Bus} from './busstation.model';

@Controller('busstation')
export class BusstationController {
  constructor(private readonly busstationService: BusstationService) {}

  @Get()
  async findAllBusStops(): Promise<Bus[]> {
    const data = await this.busstationService.findAllBusStops();
    console.log('서버 컨트롤러:', data);
    return data;
  }

  @Get('search')
  async searchBusStops(): Promise<Bus[]> {
    const data = await this.busstationService.searchBusStops();
    console.log('서버 컨트롤러:', data);
    return data;
  }

}
