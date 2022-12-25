import * as Types from '../../types.generated';

import { gql } from '@apollo/client';
import { ShipCardFragmentDoc } from '../ShipCard/ShipCard.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetShipsQueryVariables = Types.Exact<{
  offset?: Types.InputMaybe<Types.Scalars['Int']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
  find?: Types.InputMaybe<Types.ShipsFind>;
}>;


export type GetShipsQuery = { __typename?: 'Query', ships?: Array<{ __typename?: 'Ship', name?: string | null, image?: string | null, type?: string | null, url?: string | null, id?: string | null } | null> | null };


export const GetShipsDocument = gql`
    query getShips($offset: Int, $limit: Int, $find: ShipsFind) {
  ships(offset: $offset, limit: $limit, find: $find) {
    ...ShipCard
  }
}
    ${ShipCardFragmentDoc}`;

/**
 * __useGetShipsQuery__
 *
 * To run a query within a React component, call `useGetShipsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShipsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShipsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      find: // value for 'find'
 *   },
 * });
 */
export function useGetShipsQuery(baseOptions?: Apollo.QueryHookOptions<GetShipsQuery, GetShipsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetShipsQuery, GetShipsQueryVariables>(GetShipsDocument, options);
      }
export function useGetShipsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShipsQuery, GetShipsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetShipsQuery, GetShipsQueryVariables>(GetShipsDocument, options);
        }
export type GetShipsQueryHookResult = ReturnType<typeof useGetShipsQuery>;
export type GetShipsLazyQueryHookResult = ReturnType<typeof useGetShipsLazyQuery>;
export type GetShipsQueryResult = Apollo.QueryResult<GetShipsQuery, GetShipsQueryVariables>;