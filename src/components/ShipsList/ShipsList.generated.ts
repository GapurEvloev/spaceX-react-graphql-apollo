import * as Types from '../../types.generated';

import { gql } from '@apollo/client';
import { ShipCardFragmentDoc } from '../ShipCard/ShipCard.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPastShipsQueryVariables = Types.Exact<{
  offset?: Types.InputMaybe<Types.Scalars['Int']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
  find?: Types.InputMaybe<Types.ShipsFind>;
}>;


export type GetPastShipsQuery = { __typename?: 'Query', ships?: Array<{ __typename?: 'Ship', name?: string | null, image?: string | null, type?: string | null, url?: string | null, id?: string | null } | null> | null };


export const GetPastShipsDocument = gql`
    query getPastShips($offset: Int, $limit: Int, $find: ShipsFind) {
  ships(offset: $offset, limit: $limit, find: $find) {
    ...ShipCard
  }
}
    ${ShipCardFragmentDoc}`;

/**
 * __useGetPastShipsQuery__
 *
 * To run a query within a React component, call `useGetPastShipsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPastShipsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPastShipsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      find: // value for 'find'
 *   },
 * });
 */
export function useGetPastShipsQuery(baseOptions?: Apollo.QueryHookOptions<GetPastShipsQuery, GetPastShipsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPastShipsQuery, GetPastShipsQueryVariables>(GetPastShipsDocument, options);
      }
export function useGetPastShipsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPastShipsQuery, GetPastShipsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPastShipsQuery, GetPastShipsQueryVariables>(GetPastShipsDocument, options);
        }
export type GetPastShipsQueryHookResult = ReturnType<typeof useGetPastShipsQuery>;
export type GetPastShipsLazyQueryHookResult = ReturnType<typeof useGetPastShipsLazyQuery>;
export type GetPastShipsQueryResult = Apollo.QueryResult<GetPastShipsQuery, GetPastShipsQueryVariables>;