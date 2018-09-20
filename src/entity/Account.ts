import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Account {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    phone: number;

}
//# sourceMappingURL=Account.js.map
