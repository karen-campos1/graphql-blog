import React, { useRef, FormEvent } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_POST } from '../mutations/mutations';

const CreatePostForm: React.FC = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const userIdRef = useRef<HTMLInputElement>(null);
  const [createPost, { data, loading, error }] = useMutation(CREATE_POST);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    createPost({
      variables: {
        input: {
          title: titleRef.current!.value,
          body: bodyRef.current!.value,
          userId: parseInt(userIdRef.current!.value, 10),
        },
      },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" ref={titleRef} required />
      <textarea placeholder="Body" ref={bodyRef} required />
      <input type="number" placeholder="User ID" ref={userIdRef} required />
      <button type="submit">Create Post</button>
      {data && (
        <div>
          <h3>Post Created:</h3>
          <p>Title: {data.createPost.title}</p>
          <p>Body: {data.createPost.body}</p>
          <p>User ID: {data.createPost.userId}</p>
        </div>
      )}
    </form>
  );
};

export default CreatePostForm;
