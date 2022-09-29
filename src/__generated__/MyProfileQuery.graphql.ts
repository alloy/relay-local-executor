/**
 * @generated SignedSource<<679a0fbbfeb902028e8604ffd62e74cc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyProfileQuery$variables = {};
export type MyProfileQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"PersonProfile_person">;
  };
};
export type MyProfileQuery = {
  response: MyProfileQuery$data;
  variables: MyProfileQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  (v1/*: any*/),
  (v0/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyProfileQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Person",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PersonProfile_person"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MyProfileQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Person",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "FriendsConnection",
            "kind": "LinkedField",
            "name": "friends",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "FriendsConnectionEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "befriendedAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Person",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": (v2/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "GamesCollectionConnection",
            "kind": "LinkedField",
            "name": "gamesCollection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "GamesCollectionConnectionEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "addedToCollectionAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Game",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": (v2/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "457871fc2e5fad9687b3cfdf45c7fa3d",
    "id": null,
    "metadata": {},
    "name": "MyProfileQuery",
    "operationKind": "query",
    "text": "query MyProfileQuery {\n  me {\n    ...PersonProfile_person\n    id\n  }\n}\n\nfragment Friends_person on Person {\n  friends {\n    edges {\n      befriendedAt\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment GamesCollection_person on Person {\n  gamesCollection {\n    edges {\n      addedToCollectionAt\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment PersonProfile_person on Person {\n  name\n  ...Friends_person\n  ...GamesCollection_person\n}\n"
  }
};
})();

(node as any).hash = "c5f1855517a12268595d2f12760f6490";

export default node;
