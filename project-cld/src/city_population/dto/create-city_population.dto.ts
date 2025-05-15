/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNumber, IsString, IsOptional, Length } from 'class-validator';

export class CreateCityPopulationDto {
  @IsString()
  @Length(2, 25)
  name: string;

  @IsString()
  @Length(2, 25)
  state: string;

  @IsString()
  @Length(2, 25)
  country: string;

  @IsOptional()
  @IsNumber()
  population: number;
}
