/**
 * @generated SignedSource<<ea8dcab413235afda55649ad29661d6e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PersonProfile_person$data = {
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"Friends_person" | "GamesCollection_person">;
  readonly " $fragmentType": "PersonProfile_person";
};
export type PersonProfile_person$key = {
  readonly " $data"?: PersonProfile_person$data;
  readonly " $fragmentSpreads": FragmentRefs<"PersonProfile_person">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PersonProfile_person",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Friends_person"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "GamesCollection_person"
    }
  ],
  "type": "Person",
  "abstractKey": null
};

(node as any).hash = "6c1d0e5d393e42d4770aed18dc22d1a3";

export default node;
