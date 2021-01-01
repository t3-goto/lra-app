export class ValidateJwtOutDto {
  userId: number;
  username: string;

  constructor(userId: number, username: string) {
    this.userId = userId;
    this.username = username;
  }
}
