import PostCard from '@/components/postCard/PostCard';
import { POSTS } from '@/data/POSTS';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Blog',
  description: 'blog page where users shared content',
};

function BlogPage() {
  return (
    <div className="flex flex-wrap max-sm:justify-center">
      {POSTS.map((post) => (
        <div
          key={post.title}
          className="max-sm:w-4/5 w-2/4 lg:w-1/3 xl:w-1/4 2xl:w-2/12"
        >
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
}

export default BlogPage;
