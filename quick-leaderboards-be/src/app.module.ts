import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {GameModule} from "./game/game.module";
import {GameEntity} from "./game/game.entity";
import {LeaderboardModule} from "./leaderboard/leaderboard.module";
import {LeaderboardEntity} from "./leaderboard/leaderboard.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'quickLeaderboards',
      entities: [GameEntity, LeaderboardEntity],
      synchronize: true,
    }),
    GameModule,
    LeaderboardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
