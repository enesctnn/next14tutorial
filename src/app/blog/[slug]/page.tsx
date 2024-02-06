import { POSTS } from '@/data/POSTS';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type BlogDetailsProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: BlogDetailsProps) {
  const blog = POSTS.find((post) => post.href === `/${params.slug}`);

  if (!blog) {
    notFound();
  }
  return {
    title: blog.title,
    description: blog.description,
  };
}

function BlogDetailsPage({ params }: BlogDetailsProps) {
  const blog = POSTS.find((post) => post.href === `/${params.slug}`);

  if (!blog) {
    notFound();
  }
  return (
    <div className="flex flex-row gap-28 max-md:flex-col max-md:justify-around max-md:min-w-96">
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
          <table className="-mx-8 border-separate border-spacing-1 block">
            <thead>
              <tr className="font-bold text-gray-400 text-left">
                <th>Author</th>
                <th>Publish</th>
              </tr>
            </thead>
            <tbody>
              <tr className="font-medium text-gray-300">
                <td>User Name</td>
                <td>{blog.date}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xl">{blog.description}</p>
      </div>
    </div>
  );
}

export default BlogDetailsPage;
