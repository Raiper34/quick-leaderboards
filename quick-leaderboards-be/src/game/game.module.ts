import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {GameEntity} from "./game.entity";
import {GameService} from "./game.service";
import {GameController} from "./game.controller";

@Module({
    imports: [TypeOrmModule.forFeature([GameEntity])],
    exports: [TypeOrmModule, GameService],
    providers: [GameService],
    controllers: [GameController],
})
export class GameModule {}