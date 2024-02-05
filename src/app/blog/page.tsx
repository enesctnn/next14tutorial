import PostCard from '@/components/postCard/PostCard';
import React from 'react';

type Props = {};

function BlogPage({}: Props) {
  return (
    <div className="">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}

export default BlogPage;
