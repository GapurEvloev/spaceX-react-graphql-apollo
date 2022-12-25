import * as Types from '../../types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPastLaunchesQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type GetPastLaunchesQuery = { __typename?: 'Query', launchesPast?: Array<{ __typename?: 'Launch', mission_name?: string | null, launch_date_utc?: any | null, links?: { __typename?: 'LaunchLinks', mission_patch_small?: string | null } | null } | null> | null };


export const GetPastLaunchesDocument = gql`
    query getPastLaunches($limit: Int) {
  launchesPast(limit: $limit) {
    mission_name
    launch_date_utc
    links {
      mission_patch_small
    }
  }
}
    `;

/**
 * __useGetPastLaunchesQuery__
 *
 * To run a query within a React component, call `useGetPastLaunchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPastLaunchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPastLaunchesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetPastLaunchesQuery(baseOptions?: Apollo.QueryHookOptions<GetPastLaunchesQuery, GetPastLaunchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPastLaunchesQuery, GetPastLaunchesQueryVariables>(GetPastLaunchesDocument, options);
      }
export function useGetPastLaunchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPastLaunchesQuery, GetPastLaunchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPastLaunchesQuery, GetPastLaunchesQueryVariables>(GetPastLaunchesDocument, options);
        }
export type GetPastLaunchesQueryHookResult = ReturnType<typeof useGetPastLaunchesQuery>;
export type GetPastLaunchesLazyQueryHookResult = ReturnType<typeof useGetPastLaunchesLazyQuery>;
export type GetPastLaunchesQueryResult = Apollo.QueryResult<GetPastLaunchesQuery, GetPastLaunchesQueryVariables>;