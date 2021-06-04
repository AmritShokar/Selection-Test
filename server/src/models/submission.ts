import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("submission")
export default class Submission {
    
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public feedDate: Date;

    @Column()
    public country: string;
    @Column()
    public city: string;
    @Column()
    public address: string;
    
    @Column()
    public feedType: string;
    @Column()
    public feedAmount: number;
    @Column()
    public numDucks: number;
}