import {Body, Controller, Get, Post} from '@nestjs/common';
import {GameService} from "./game.service";

interface GameDto {
    id?: number;
    name: string;
}

@Controller('games')
export class GameController {

    constructor(private readonly service: GameService) {
    }

    @Get()
    getAll(): Promise<GameDto[]> {
        return this.service.findAll();
    }

    @Post()
    create(@Body() user: GameDto): Promise<GameDto> {
        return this.service.create(user);
    }

}