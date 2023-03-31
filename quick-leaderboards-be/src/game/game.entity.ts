import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {LeaderboardEntity} from "../leaderboard/leaderboard.entity";

@Entity()
export class GameEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @OneToMany(() => LeaderboardEntity, leaderboard => leaderboard.game)
    leaderboards?: LeaderboardEntity[];
}