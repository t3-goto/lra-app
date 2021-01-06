import { User } from '../../users/user.entity';
import { OmitType } from '@nestjs/swagger';

export class GetTokenInDto extends OmitType(User, ['password'] as const) {}
