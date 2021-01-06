import { User } from '../user.entity';

export class CreateUserOutDto extends User {
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
