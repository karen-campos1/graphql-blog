import React, { useRef, FormEvent } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_POST } from '../mutations/mutations';

const DeletePostForm: React.FC = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const [deletePost, { data, loading, error }] = useMutation(DELETE_POST);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    deletePost({
      variables: {
        id: idRef.current!.value,
      },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Post ID" ref={idRef} required />
      <button type="submit">Delete Post</button>
      {data && <p>Post deleted successfully!</p>}
    </form>
  );
};

export default DeletePostForm;
