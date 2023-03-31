import {Body, Controller, Get, Post} from '@nestjs/common';
import {LeaderboardService} from "./leaderboard.service";

interface LeaderboardDto {
    id?: number;
    name: string;
    order: 'asc' | 'desc';
    limit: number;
}

@Controller('leaderboards')
export class LeaderboardController {

    constructor(private readonly service: LeaderboardService) {
    }

    @Get()
    getAll(): Promise<LeaderboardDto[]> {
        return this.service.findAll();
    }

    @Post()
    create(@Body() leaderboard: LeaderboardDto): Promise<LeaderboardDto> {
        return this.service.create(leaderboard);
    }

}