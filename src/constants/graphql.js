import gql from 'graphql-tag';

export const ADD_TO_LIST_MUTATION = gql`
  mutation AddToListMutation($movieItemId: Int!) {
    addToList(
      movieItemId: $movieItemId
    ) {
      id
      movieItemId
    }
  }
`