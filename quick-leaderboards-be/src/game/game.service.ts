import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {GameEntity} from "./game.entity";

@Injectable()
export class GameService {
    constructor(
        @InjectRepository(GameEntity)
        private gamesRepository: Repository<GameEntity>,
    ) {}

    find(id: number): Promise<GameEntity> {
        return this.gamesRepository.findOneBy({id});
    }

    findAll(): Promise<GameEntity[]> {
        return this.gamesRepository.find();
    }

    async create(user: GameEntity): Promise<GameEntity> {
        return this.gamesRepository.save(user);
    }
}