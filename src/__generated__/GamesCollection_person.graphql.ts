/**
 * @generated SignedSource<<53a6a1e3ee77132fdca0b06e0af4f811>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GamesCollection_person$data = {
  readonly gamesCollection: {
    readonly edges: ReadonlyArray<{
      readonly addedToCollectionAt: any;
      readonly node: {
        readonly id: string;
        readonly name: string;
      };
    }>;
  };
  readonly " $fragmentType": "GamesCollection_person";
};
export type GamesCollection_person$key = {
  readonly " $data"?: GamesCollection_person$data;
  readonly " $fragmentSpreads": FragmentRefs<"GamesCollection_person">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GamesCollection_person",
  "selections": [
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

(node as any).hash = "557b5e72104f1f74f94a901f8e9a1c94";

export default node;
