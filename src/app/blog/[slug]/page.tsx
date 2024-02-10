import PostUser from '@/components/postUser/PostUser';
import SlideAnimationWrapper from '@/components/ui/SlideAnimationWrapper';
import { POSTS } from '@/data/POSTS';
import { getPost } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

type BlogDetailsProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: BlogDetailsProps) {
  const blog = getPost(params.slug);

  if (!blog) {
    notFound();
  }
  return {
    title: blog.title,
    description: blog.description,
  };
}

function BlogDetailsPage({ params }: BlogDetailsProps) {
  // const blog = POSTS.find((post) => post.href === `/${params.slug}`);
  const blog = getPost(params.slug);
  if (!blog) {
    notFound();
  }
  return (
    <SlideAnimationWrapper direction="right">
      <div className="relative h-80 md:flex-1 md:h-calc ">
        <Image
          src={blog.src}
          alt={blog.title}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="md:flex-2 flex flex-col gap-10">
        <h1 className="text-6xl uppercase font-bold">{blog.title}</h1>
        <div className="flex gap-14 items-center">
          <Image
            src="/noavatar.png"
            alt="user avatar"
            width={50}
            height={50}
            className="object-cover rounded-full"
          />
          <Suspense fallback={<p>Loading . . .</p>}>
            <PostUser date={blog.date} userId={blog.userId} />
          </Suspense>
        </div>
        <p className="text-xl">{blog.description}</p>
      </div>
    </SlideAnimationWrapper>
  );
}

export default BlogDetailsPage;
