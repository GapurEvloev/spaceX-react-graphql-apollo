import * as Types from '../../types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPastOneShipQueryVariables = Types.Exact<{
  shipId: Types.Scalars['ID'];
}>;


export type GetPastOneShipQuery = { __typename?: 'Query', ship?: { __typename?: 'Ship', id?: string | null, image?: string | null, name?: string | null, type?: string | null, url?: string | null, year_built?: number | null } | null };


export const GetPastOneShipDocument = gql`
    query getPastOneShip($shipId: ID!) {
  ship(id: $shipId) {
    id
    image
    name
    type
    url
    year_built
  }
}
    `;

/**
 * __useGetPastOneShipQuery__
 *
 * To run a query within a React component, call `useGetPastOneShipQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPastOneShipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPastOneShipQuery({
 *   variables: {
 *      shipId: // value for 'shipId'
 *   },
 * });
 */
export function useGetPastOneShipQuery(baseOptions: Apollo.QueryHookOptions<GetPastOneShipQuery, GetPastOneShipQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPastOneShipQuery, GetPastOneShipQueryVariables>(GetPastOneShipDocument, options);
      }
export function useGetPastOneShipLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPastOneShipQuery, GetPastOneShipQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPastOneShipQuery, GetPastOneShipQueryVariables>(GetPastOneShipDocument, options);
        }
export type GetPastOneShipQueryHookResult = ReturnType<typeof useGetPastOneShipQuery>;
export type GetPastOneShipLazyQueryHookResult = ReturnType<typeof useGetPastOneShipLazyQuery>;
export type GetPastOneShipQueryResult = Apollo.QueryResult<GetPastOneShipQuery, GetPastOneShipQueryVariables>;