import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../queries/queries';

const Posts: React.FC = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

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

export default Posts;
