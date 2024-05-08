import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateUserDto {
  @ApiProperty()
  @IsString()
  Name: String;
}