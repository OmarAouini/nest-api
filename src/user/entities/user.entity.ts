import { hash, genSalt } from 'bcrypt';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  surname: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  email: string;
  @Column()
  created_at: Date;

  constructor(
    name: string,
    surname: string,
    username: string,
    password: string,
    email: string,
  ) {
    this.name = name;
    this.surname = surname;
    this.username = username;
    this.password = password;
    this.email = email;
  }

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
  }

  @BeforeInsert()
  async creationDate(): Promise<void> {
    this.created_at = new Date();
  }
}
