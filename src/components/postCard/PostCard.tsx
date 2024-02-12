'use client';

import { IPost } from '@/lib/models';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';

const truncateWithEllipses = (text: string, max: number) =>
  text.substring(0, max - 1) + (text.length > max ? '...' : '');

function PostCard({ createdAt, desc, slug, img, title }: IPost) {
  return (
    <motion.div
      initial={{ rotateY: -90 }}
      animate={{ rotateY: 0 }}
      transition={{
        type: 'spring',
        damping: 9,
      }}
      className="flex flex-col gap-5 mb-5"
    >
      <div className="flex">
        <div className="w-11/12 h-[400px] relative">
          <Image
            src={img}
            alt="title"
            fill
            className="object-cover object-center"
          />
        </div>
        <span className="select-none rotate-90 -translate-x-48">
          {createdAt.toString().slice(0, 10).replace(/-/g, '/')}
        </span>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-5 uppercase">{title}</h1>
        <p className="text-xs mb-5 text-gray-500 w-11/12 capitalize leading-relaxed">
          {truncateWithEllipses(desc, 150)}
        </p>
        <Link
          href={`/blog/${slug}`}
          className={cn(
            buttonVariants({ variant: 'link', className: 'p-0 text-cyan-500' })
          )}
        >
          READ MORE
        </Link>
      </div>
    </motion.div>
  );
}

export default PostCard;
