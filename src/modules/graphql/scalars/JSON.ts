import { CustomScalar, Scalar } from '@nestjs/graphql';
import GraphqlJSON from 'graphql-type-json';

export class JSONObject {}

@Scalar('JSONObject', () => JSONObject)
export class JSONScalar implements CustomScalar<string, any> {
  name = GraphqlJSON.name;

  description = GraphqlJSON.description;

  serialize(v) {
    console.log('serialize', v);
    return GraphqlJSON.serialize(v) as string;
  }

  parseValue(v) {
    console.log('parseValue', v);
    return GraphqlJSON.parseValue(v);
  }

  parseLiteral(v) {
    console.log('parseLiteral', v);
    return GraphqlJSON.parseLiteral(v);
  }
}
