import { Controller, Get, Param, Post, Body, Patch, Delete, Query} from '@nestjs/common';
import { response } from 'express';
import { CoffeeService } from 'src/coffee/coffee.service';

@Controller('hi') //controller decorator can be passed the stirng ->passes the meta data
export class HiController {
    constructor(private readonly coffeeService: CoffeeService){//private-> only within the class itsekf, readonly-> only accessing

    }

    @Get() //to create the nested path hi/hello
    findAll(@Query() paginationQuery) {
        const{ limit, offset } = paginationQuery;
        return `This action returns Sheep. limit: ${limit}, offset: ${offset}`;
    }

    @Get(':id') //expect the dynamic route parameter named id
    findOne(@Param('id') id: string) { //Param decorator named id to extract parameters from the URL in a route handler
        return `This function returns #${id} coffee`;
    }

    @Post()
    //@HttpCode(HttpStatus.GONE)
    create(@Body('name') body){ //'name' to extract data(part of the body)
        return body;
    }

    @Patch(':id')
    update(@Param('id') id: string,@Body() body) {
        return `This action updates #${id} coffee with data: ${JSON.stringify(body)}`;
    }

    @Delete(':id')// colon indicate that the path is dynamic
    remove(@Param('id') id: string){
        return `This action removes #${id} coffee`;
    }
}
