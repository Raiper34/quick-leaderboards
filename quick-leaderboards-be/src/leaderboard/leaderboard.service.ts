import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {LeaderboardEntity} from "./leaderboard.entity";
import {GameService} from "../game/game.service";

@Injectable()
export class LeaderboardService {
    constructor(
        @InjectRepository(LeaderboardEntity)
        private gamesRepository: Repository<LeaderboardEntity>,
        private readonly gameService: GameService,
    ) {}

    findAll(): Promise<LeaderboardEntity[]> {
        return this.gamesRepository.find();
    }

    async create(leaderboard: LeaderboardEntity): Promise<LeaderboardEntity> {
        const game = await this.gameService.find(1);
        return this.gamesRepository.save({...leaderboard, game});
    }
}