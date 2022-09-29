import * as React from "react";
import { graphql, useFragment } from "react-relay";
import { Friends } from "./Friends";
import { GamesCollection } from "./GamesCollection";
import type { PersonProfile_person$key } from "./__generated__/PersonProfile_person.graphql";

export const PersonProfile: React.FC<{
  person: PersonProfile_person$key;
}> = (props) => {
  const person = useFragment(
    graphql`
      fragment PersonProfile_person on Person {
        name
        ...Friends_person
        ...GamesCollection_person
      }
    `,
    props.person
  );
  return (
    <div>
      {person.name}
      <Friends person={person} />
      <GamesCollection person={person} />
    </div>
  );
};
