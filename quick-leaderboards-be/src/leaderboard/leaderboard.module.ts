import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {LeaderboardEntity} from "./leaderboard.entity";
import {LeaderboardService} from "./leaderboard.service";
import {LeaderboardController} from "./leaderboard.controller";
import {GameModule} from "../game/game.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([LeaderboardEntity]),
        GameModule,
    ],
    exports: [TypeOrmModule],
    providers: [LeaderboardService],
    controllers: [LeaderboardController],
})
export class LeaderboardModule {}