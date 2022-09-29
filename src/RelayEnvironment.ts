import {
  Environment,
  Network,
  RecordSource,
  Store,
  GraphQLResponse,
} from "relay-runtime";
import { schema } from "./schema";
import { execute, parse } from "graphql";

export const createEnvironment = () =>
  new Environment({
    network: Network.create((params, variables) => {
      return execute({
        schema,
        document: parse(params.text!),
        variableValues: variables,
      }) as Promise<GraphQLResponse>;
    }),
    store: new Store(new RecordSource()),
  });
