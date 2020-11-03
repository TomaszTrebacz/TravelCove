import { IsString, IsUUID } from 'class-validator';
import { ChangeRoleInput } from '../../graphql';
import { userRole } from '../../users/enums/userRole.enum';

export class ChangeRoleDto extends ChangeRoleInput {
  @IsUUID()
  id: string;

  @IsString()
  role: userRole;
}
