import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';

@Controller('api/example')
export class ExampleController {
  data = [];
  // constructor() {}
  @Get('')
  getAll() {
    return this.data;
  }

  @Post()
  add(@Body() dataCreate) {
    const newData = {id: uuidv4(), ...dataCreate};
    this.data.push(newData);
    return newData;
  }

  @Put(':id/update-example')
  update(@Param('id') id: string, @Body() dataUpdate) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id == id) {
        this.data[i] = {...this.data[i], ...dataUpdate, id: this.data[i].id};
        return this.data[i];
      }
    }
    return `id = ${id} not found`;
  }

  @Delete(':id/update-example')
  delete(@Param('id') id: string) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id == id) {
        this.data.splice(i, 1);
        return 'deleted';
      }
    }
    return `id = ${id} not found`;
  }
}
