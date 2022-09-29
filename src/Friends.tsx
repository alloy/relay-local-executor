import * as React from "react";
import { graphql, useFragment } from "react-relay";
import type { Friends_person$key } from "./__generated__/Friends_person.graphql";

export const Friends: React.FC<{ person: Friends_person$key }> = (props) => {
  const person = useFragment(
    graphql`
      fragment Friends_person on Person {
        friends {
          edges {
            befriendedAt
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
      <h2>Friends</h2>
      <ul>
        {person.friends.edges.map((edge) => (
          <li key={edge.node.id}>
            {edge.node.name} (befriended at {edge.befriendedAt})
          </li>
        ))}
      </ul>
    </div>
  );
};
