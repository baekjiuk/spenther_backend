import { ArgsType, Field, InputType, Int, ObjectType, OmitType, PickType } from '@nestjs/graphql';

import { UserDTO } from '../user/user.dto';

@ObjectType('Expenditure')
export class ExpenditureDTO {
  @Field(() => UserDTO)
  creator: UserDTO;

  @Field(() => [ExpenditureDTO])
  details: ExpenditureDTO[];

  @Field(() => String)
  title: string;

  @Field(() => [UserDTO])
  members: UserDTO[];
}

@ObjectType('ExpenditureDetail')
export class ExpenditureDetailDTO {
  @Field(() => Int)
  amount: number;

  @Field(() => String)
  description: string;

  @Field(() => String)
  tag: string;

  @Field(() => String)
  tagColor: string;
}

@InputType('InputExpenditureDetail')
export class InputExpenditureDetailDTO extends OmitType(ExpenditureDetailDTO, [], InputType) {}

@ArgsType()
export class CreateExpenditureDTO {
  @Field(() => String)
  title: string;
}

@ArgsType()
export class CreateExpenditureDetailDTO {
  @Field(() => String)
  expenditureId: string;

  @Field(() => InputExpenditureDetailDTO)
  data: InputExpenditureDetailDTO;
}
