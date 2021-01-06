import { User } from '../user.entity';

export class DeleteUserOutDto extends User {
  constructor(
    userId: number,
    username: string,
    password: string,
    isActive: boolean,
    createdAt: string,
    updatedAt: string
  ) {
    super();
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.isActive = isActive;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
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
