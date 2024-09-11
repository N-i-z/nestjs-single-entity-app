import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    example: 'Jane Doe',
    description: 'The updated name of the user',
    required: false,
  })
  name?: string;

  @ApiProperty({
    example: 'jane.doe@example.com',
    description: 'The updated email of the user',
    required: false,
  })
  email?: string;

  @ApiProperty({
    example: false,
    description: 'Indicates if the user is active or not',
    required: false,
  })
  isActive?: boolean;
}
