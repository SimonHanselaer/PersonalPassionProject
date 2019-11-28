import gql from 'graphql-tag';

export const ADD_USER_MUTATION = gql`
  mutation AddUserMutation($input: UserInput!) {
    addUser(
      input: $input
    ) {
      id
      lists {
        id
        name
        media {
          id
          mediaTitle
          mediaImage
        }
      }
    }
  }
`

export const ADD_MEDIAITEM_MUTATION = gql`
mutation AddMediaItemMutation($input: MediaItemInput!) {
    addMediaItem(input: $input) {
      user_id
      id
      mediaTitle
      mediaImage
      mediaType
    }
}
`

export const USER_LISTS_QUERY = gql`
query UserListsQuery($id: ID!) {
  userLists(id: $id) {
    id
    lists {
      id
      name
      media {
        mediaTitle
      }
    }
  }
}
`