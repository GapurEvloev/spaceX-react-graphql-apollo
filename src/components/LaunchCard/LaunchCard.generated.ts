import * as Types from '../../types.generated';

import { gql } from '@apollo/client';
export type LaunchCardFragment = { __typename?: 'Launch', mission_name?: string | null, launch_date_utc?: any | null, links?: { __typename?: 'LaunchLinks', mission_patch_small?: string | null } | null };

export const LaunchCardFragmentDoc = gql`
    fragment LaunchCard on Launch {
  mission_name
  launch_date_utc
  links {
    mission_patch_small
  }
}
    `;