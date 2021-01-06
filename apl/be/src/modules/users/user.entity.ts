import { EntitySchema } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  updatedAt: string;
}

export const UserEntity = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    userId: {
      name: 'user_id',
      type: Number,
      primary: true,
      generated: true,
    },
    username: {
      name: 'username',
      type: String,
      unique: true,
    },
    password: {
      name: 'password',
      type: String,
    },
    isActive: {
      name: 'is_active',
      type: Boolean,
      default: true,
    },
    createdAt: {
      name: 'created_at',
      type: Date,
      createDate: true,
    },
    updatedAt: {
      name: 'updated_at',
      type: Date,
      updateDate: true,
    },
  },
  uniques: [
    {
      name: 'UNIQUE_TEST',
      columns: ['username'],
    },
  ],
});
