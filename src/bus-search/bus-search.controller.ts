import { Controller, Get } from "@nestjs/common";
import { Entity } from "./bus-search.schema";
import { EntityService } from "./bus-search.service";


@Controller('search')

export class DataController {
  constructor(private readonly entityService: EntityService) { }


  @Get('submit')
    async submitSearch(): Promise<string | null>
  {
    try {
      const result = await this.entityService.getID();
      return result;
    }
    catch (error) {
      throw error;
    }
  }
}

