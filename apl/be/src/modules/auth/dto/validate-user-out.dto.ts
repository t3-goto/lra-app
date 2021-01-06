import { User } from '../../users/user.entity';
import { OmitType } from '@nestjs/swagger';

export class ValidateUserOutDto extends OmitType(User, ['password'] as const) {}
