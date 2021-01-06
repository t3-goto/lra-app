import { User } from '../user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class GetUsersOutDto {
  @ApiProperty()
  users: Array<User>;
  constructor(users: User[]) {
    this.users = users;
  }
  public static create(users: User[]): GetUsersOutDto {
    return new GetUsersOutDto(users);
  }
}
