import * as Types from '../types.generated';

import { gql } from '@apollo/client';
export type ShipCardFragment = { __typename?: 'Ship', image?: string | null, name?: string | null, type?: string | null, url?: string | null, id?: string | null };

export const ShipCardFragmentDoc = gql`
    fragment ShipCard on Ship {
  image
  name
  type
  url
  id
}
    `;