import { User } from './user';

export class CreateUserOutDto extends User {
  public static create(user: User): CreateUserOutDto {
    return new CreateUserOutDto(
      user.userId,
      user.username,
      user.password,
      user.isActive,
      user.createdAt,
      user.updatedAt
    );
  }
}
