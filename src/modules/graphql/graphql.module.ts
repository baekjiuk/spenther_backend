import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule as NestGraphqlModule } from '@nestjs/graphql';
import { join } from 'path';

import { JSONScalar } from './scalars/JSON';

@Module({
  imports: [
    NestGraphqlModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src', 'schema.gql'),
      cache: 'bounded',
      driver: ApolloDriver,
      debug: true,
      sortSchema: true,
      playground: true,
    }),
  ],
  providers: [JSONScalar],
})
export class GraphqlModule {}
