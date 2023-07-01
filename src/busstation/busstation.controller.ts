import { Controller,Get } from '@nestjs/common';
import { BusstationService } from './busstation.service';
import { Bus} from './busstation.model';

@Controller('busstation')
export class BusstationController {
constructor(private busstationService: BusstationService){}


@Get()
  async getAllBusstations(): Promise<Bus[]> {
    console.log('서버콘트롤러',this.busstationService.findAllBusStops()[0]);
    return this.busstationService.findAllBusStops();
  }

}
