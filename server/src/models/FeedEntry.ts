import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Length, IsInt, Min, Max } from "class-validator";

@Entity()
export class FeedEntry {
    
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public feedDate: Date;

    @Column()
    @Length(2, 50)
    public country: string;

    @Column()
    @Length(2, 50)
    public city: string;

    @Column()
    @Length(2, 50)
    public address: string;

    @Column()
    @Length(2, 30)
    public feedType: string;

    @Column()
    @IsInt()
    @Min(1)
    @Max(999999)
    public feedAmount: number;

    @Column()
    @IsInt()
    @Min(1)
    @Max(999)
    public numDucks: number;
}