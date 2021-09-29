import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(["id", "name"])
@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id?: number;

  @Column()
  name: string;
}
