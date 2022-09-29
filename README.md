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

- [Schema](./data/schema.graphql)
- [Relay Environment](./src/RelayEnvironment.ts)
