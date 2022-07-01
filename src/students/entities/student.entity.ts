import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column({
    name: 'first_name',
  })
  firstname: string;

  @Column({
    name: 'last_name',
  })
  lastname: string;

  @Column()
  department: string;

  @Column({
    name: 'mobile_number',
    nullable: false,
  })
  mobilenumber: string;

  @Column({
    nullable: false,
  })
  email: string;

  @Column({
    name: 'contact_address',
    nullable: false,
  })
  contactaddress: string;
}
