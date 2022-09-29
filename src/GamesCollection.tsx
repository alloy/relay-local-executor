import * as React from "react";
import { graphql, useFragment } from "react-relay";
import type { GamesCollection_person$key } from "./__generated__/GamesCollection_person.graphql";

export const GamesCollection: React.FC<{
  person: GamesCollection_person$key;
}> = (props) => {
  const person = useFragment(
    graphql`
      fragment GamesCollection_person on Person {
        gamesCollection {
          edges {
            addedToCollectionAt
            node {
              id
              name
            }
          }
        }
      }
    `,
    props.person
  );
  return (
    <div>
      <h2>Games Collection</h2>
      <ul>
        {person.gamesCollection.edges.map((edge) => (
          <li key={edge.node.id}>
            {edge.node.name} (added to collection at {edge.addedToCollectionAt})
          </li>
        ))}
      </ul>
    </div>
  );
};
