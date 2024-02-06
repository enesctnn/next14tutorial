import { POSTS } from '@/data/POSTS';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

function BlogDetailsPage({ params }: Props) {
  const blog = POSTS.find((post) => post.href === `/${params.slug}`);

  if (!blog) {
    notFound();
  }
  return (
    <div className="flex gap-28">
      <div className="relative flex-1 h-calc">
        <Image src={blog.src} alt={blog.title} fill className="object-cover" />
      </div>
      <div className="flex-2">
        <h1 className="text-6xl uppercase font-bold">{blog.title}</h1>
        <div className="flex gap-10 relative items-center">
          <div>
            <Image
              src="/noavatar.png"
              alt="user avatar"
              width={50}
              height={50}
              className="object-cover rounded-full"
            />
          </div>
          <table className=" border-separate border-spacing-2 block">
            <thead className="flex">
              <tr className="font-bold text-gray-400">
                <th>Author</th>
                <th>Publish</th>
              </tr>
            </thead>
            <tbody>
              <tr className="font-semibold">
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
