'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import { POSTS } from '@/data/POSTS';

type PostProps = (typeof POSTS)[number];

function PostCard({ date, description, href, src, title }: PostProps) {
  function truncateWithEllipses(text: string, max: number) {
    return text.substr(0, max - 1) + (text.length > max ? '...' : '');
  }
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
            src={src}
            alt="title"
            fill
            className="object-cover object-center"
          />
        </div>
        <span className="select-none rotate-90 -translate-x-48">{date}</span>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-5 uppercase">{title}</h1>
        <p className="text-xs mb-5 text-gray-500 w-11/12 capitalize leading-relaxed">
          {truncateWithEllipses(description, 150)}
        </p>
        <Link
          href={`/blog/${href}`}
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
