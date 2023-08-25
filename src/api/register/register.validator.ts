import {
    IsEmail,
    IsObject,
    IsOptional,
    IsString,
    ValidateNested,
} from "class-validator";

export class RegisterDTO {
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    name: string;

}
