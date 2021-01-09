import { EntitySchema } from 'typeorm';
export class User {
  userId: number;

  username: string;

  password: string;

  isActive: boolean;

  createdAt: string;

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
