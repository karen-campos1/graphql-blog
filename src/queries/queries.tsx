import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      data {
        id
        userId
        title
        body
      }
    }
  }
`;

export const GET_POSTS_BY_USER = gql`
  query GetPostsByUser($userId: ID!) {
    posts(options: { filter: { userId: { eq: $userId } } }) {
      data {
        id
        userId
        title
        body
      }
    }
  }
`;
