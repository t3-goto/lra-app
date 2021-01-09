import { User } from './user';

export class GetUserOutDto extends User {
  public static create(user: User): GetUserOutDto {
    return new GetUserOutDto(
      user.userId,
      user.username,
      user.password,
      user.isActive,
      user.createdAt,
      user.updatedAt
    );
  }
}
