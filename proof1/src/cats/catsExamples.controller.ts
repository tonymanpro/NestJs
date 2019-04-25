import { Controller, Get, Res, Req, Post, HttpCode, Header, Param, Body } from '@nestjs/common';
import { CreateCatDto } from './create-cat';
import { Response, Request } from 'express';

@Controller('catsExample')
export class CatsExampleController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }
    @Get('promise')
    async findAll1(): Promise<any[]> {
        return [];
    }
    @Get('ab*cd')
    wildcard() {
        return 'This route uses a wildcard';
    }
    @Get('express1')
    findAll2(@Req() request: Request): string {
        return 'This action returns all cats';
    }
    @Get('express2')
    findAll3(@Res() response) {
        response.status(200).send('This action returns all cats');
    }
    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }
    @Get('param/:id')
    findOne2(@Param('id') id): string {
        return `This action returns a #${id} cat`;
    }
    @Post()
    create(): string {
        return 'This action adds a new cat';
    }
    @Post('code')
    @HttpCode(204)
    create2() {
        return 'This action adds a new cat';
    }
    @Post('header')
    @Header('Cache-Control', 'none')
    create3() {
        return 'This action adds a new cat';
    }
    @Post()
    async create4(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat';
    }


}