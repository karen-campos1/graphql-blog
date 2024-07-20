import React from 'react';
import CreateAlbumForm from './components/CreateAlbumForm';
import Posts from './components/Posts';
import PostsByUser from './components/PostsByUser';
import CreatePostForm from './components/CreatePostForm';
import UpdatePostForm from './components/UpdatePostForm';
import DeletePostForm from './components/DeletePostForm';

function App() {
  return (
    <div>
      <h1>GraphQL Blog</h1>
      <CreateAlbumForm />
      <Posts />
      <PostsByUser userId={1} />
      <CreatePostForm />
      <UpdatePostForm />
      <DeletePostForm />
    </div>
  );
}

export default App;
