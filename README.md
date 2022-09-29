# Relay with local schema/executor

## Install:

```
git clone https://github.com/alloy/relay-local-executor.git
cd relay-local-executor
yarn install
yarn start
```

## Develop

To compile the GraphQL documents, run relay-compiler in a separate shell:

```
yarn relay --watch
```

Also be sure to install the recommended vscode extension.

## Noteworthy files

- [Schema Definition](./data/schema.graphql): the schema
- [Schema Resolvers](./src/schema.ts): the implementations of schema fields
- [Relay Environment](./src/RelayEnvironment.ts): where Relay sends requests to the local GraphQL executor
