import * as Types from '../../types.generated';

import { gql } from '@apollo/client';
export type ShipCardFragment = { __typename?: 'Ship', name?: string | null, image?: string | null, type?: string | null, url?: string | null, id?: string | null };

export const ShipCardFragmentDoc = gql`
    fragment ShipCard on Ship {
  name
  image
  type
  url
  id
}
    `;