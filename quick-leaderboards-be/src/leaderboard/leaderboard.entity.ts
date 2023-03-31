import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {GameEntity} from "../game/game.entity";

@Entity()
export class LeaderboardEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @Column()
    order: 'asc' | 'desc';

    @Column()
    limit: number;

    @ManyToOne(() => GameEntity, game => game.leaderboards)
    game?: GameEntity;
}