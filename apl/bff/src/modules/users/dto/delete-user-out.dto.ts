import { User } from './user';

export class DeleteUserOutDto extends User {
  public static create(user: User): DeleteUserOutDto {
    return new DeleteUserOutDto(
      user.userId,
      user.username,
      user.password,
      user.isActive,
      user.createdAt,
      user.updatedAt
    );
  }
}
