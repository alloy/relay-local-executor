import * as React from "react";
import { graphql, useLazyLoadQuery } from "react-relay";
import { PersonProfile } from "./PersonProfile";
import type { MyProfileQuery } from "./__generated__/MyProfileQuery.graphql";

export const MyProfile: React.FC = () => {
  const data = useLazyLoadQuery<MyProfileQuery>(
    graphql`
      query MyProfileQuery {
        me {
          ...PersonProfile_person
        }
      }
    `,
    {}
  );
  return (
    <div>
      <PersonProfile person={data.me} />
    </div>
  );
};
