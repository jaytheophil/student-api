import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  lastname: string;

  @IsNotEmpty()
  department: string;

  @IsNotEmpty()
  mobilenumber: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  contactaddress: string;
}
