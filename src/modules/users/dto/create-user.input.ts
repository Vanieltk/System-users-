import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;
  @Field()
  cpf: string;
  @Field()
  key: string;
}
