/**
 * @generated SignedSource<<a710f77ffebb7c461cebba1e1052c1d6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Friends_person$data = {
  readonly friends: {
    readonly edges: ReadonlyArray<{
      readonly befriendedAt: any;
      readonly node: {
        readonly id: string;
        readonly name: string;
      };
    }>;
  };
  readonly " $fragmentType": "Friends_person";
};
export type Friends_person$key = {
  readonly " $data"?: Friends_person$data;
  readonly " $fragmentSpreads": FragmentRefs<"Friends_person">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Friends_person",
  "selections": [
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
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "name",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Person",
  "abstractKey": null
};

(node as any).hash = "e8a1818c66bb3ffabad4968c2aaff541";

export default node;
