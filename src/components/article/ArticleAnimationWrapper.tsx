'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const ArticleAnimationWrapper = ({
  children,
  direction = 'left',
}: {
  children: ReactNode;
  direction?: 'left' | 'right';
}) => (
  <motion.article
    initial={{ x: direction === 'left' ? -700 : 700 }}
    animate={{ x: 0, transition: { type: 'just' } }}
    className="flex gap-28 px-5 my-20"
  >
    {children}
  </motion.article>
);

export default ArticleAnimationWrapper;
