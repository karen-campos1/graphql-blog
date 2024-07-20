import { gql } from '@apollo/client';

export const CREATE_POST = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
      userId
    }
  }
`;

export const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      title
      body
      userId
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id)
  }
`;


export const CREATE_ALBUM = gql`
  mutation CreateAlbum($title: String!, $userId: ID!) {
    createAlbum(input: { title: $title, userId: $userId }) {
      id
      title
      user {
        id
        name
      }
    }
  }
`;
