import React, { useRef, FormEvent } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_POST } from '../mutations/mutations';

const UpdatePostForm: React.FC = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const [updatePost, { data, loading, error }] = useMutation(UPDATE_POST);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    updatePost({
      variables: {
        id: idRef.current!.value,
        input: {
          title: titleRef.current!.value,
          body: bodyRef.current!.value,
        },
      },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Post ID" ref={idRef} required />
      <input type="text" placeholder="Title" ref={titleRef} required />
      <textarea placeholder="Body" ref={bodyRef} required />
      <button type="submit">Update Post</button>
      {data && (
        <div>
          <h3>Post Updated:</h3>
          <p>Title: {data.updatePost.title}</p>
          <p>Body: {data.updatePost.body}</p>
          <p>User ID: {data.updatePost.userId}</p>
        </div>
      )}
    </form>
  );
};

export default UpdatePostForm;
