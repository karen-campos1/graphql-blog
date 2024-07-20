import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS_BY_USER } from '../queries/queries';

interface PostsByUserProps {
  userId: number;
}

const PostsByUser: React.FC<PostsByUserProps> = ({ userId }) => {
  const { loading, error, data } = useQuery(GET_POSTS_BY_USER, {
    variables: { userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.posts.data.map((post: { id: number; userId: number; title: string; body: string }, index: number) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>Post ID: {post.id}</p>
          <p>User ID: {post.userId}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsByUser;
