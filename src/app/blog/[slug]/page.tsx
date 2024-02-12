import PostUser from '@/components/postUser/PostUser';
import SlideAnimationWrapper from '@/components/SlideAnimationWrapper';
import { getPost } from '@/lib/data';
import { IPost } from '@/lib/models';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

type BlogDetailsProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: BlogDetailsProps) {
  const blog = (await getPost(params.slug)) as IPost;

  if (!blog) {
    notFound();
  }
  return {
    title: blog.title,
    description: blog.desc,
  };
}

async function BlogDetailsPage({ params }: BlogDetailsProps) {
  // const blog = POSTS.find((post) => post.href === `/${params.slug}`);
  const blog = (await getPost(params.slug)) as IPost;
  if (!blog) {
    notFound();
  }

  return (
    <SlideAnimationWrapper direction="right">
      <div className="relative h-80 md:flex-1 md:h-calc ">
        <Image
          src={blog.img}
          alt={blog.title}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="md:flex-2 flex flex-col gap-10">
        <h1 className="text-6xl uppercase font-bold">{blog.title}</h1>
        <div className="flex gap-14 items-center">
          <Suspense fallback={<p>Loading . . .</p>}>
            <PostUser date={blog.createdAt} userId={blog.userId} />
          </Suspense>
        </div>
        <p className="text-xl">{blog.desc}</p>
      </div>
    </SlideAnimationWrapper>
  );
}

export default BlogDetailsPage;
