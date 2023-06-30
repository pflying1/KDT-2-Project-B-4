import { Injectable } from '@nestjs/common';

@Injectable()
export class BusSocketService {
  private busData: any = null;

  saveData(data: any): void {
    this.busData = data;
    console.log('Data saved:', this.busData);
  }

  getData(): any {
    return this.busData;
  }
}
