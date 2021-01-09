import { User } from '../../../interfaces';
import { OmitType } from '@nestjs/swagger';

export class ValidateUserOutDto extends OmitType(User, ['password'] as const) {}
