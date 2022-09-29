import typeDefs from "../data/schema.graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      async me() {
        await delay(1000);
        return {
          id: "user-42",
          name: "Eloy Durán",
          email: "eloy.duran@microsoft.com",
        };
      },
    },
    Person: {
      async friends(person) {
        delay(1000);
        return {
          edges: getFriends(person.id),
        };
      },
      async gamesCollection(person) {
        delay(1000);
        return {
          edges: getGamesCollection(person.id),
        };
      },
    },
  },
});

function getFriends(userId: string) {
  return [
    {
      befriendedAt: "2021-01-01",
      node: {
        id: "user-43",
        name: "John Doe",
        email: "john.doe@microsoft.com",
      },
    },
    {
      befriendedAt: "2021-01-02",
      node: {
        id: "user-44",
        name: "Jane Doe",
        email: "jane.doe@microsoft.com",
      },
    },
  ];
}

function getGamesCollection(userId: string) {
  return [
    {
      addedToCollectionAt: "2021-01-01",
      node: {
        id: "game-43",
        name: "Game 1",
      },
    },
    {
      addedToCollectionAt: "2021-01-02",
      node: {
        id: "game-44",
        name: "Game 2",
      },
    },
  ];
}
