'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const SlideAnimationWrapper = ({
  children,
  direction = 'left',
}: {
  children: ReactNode;
  direction?: 'left' | 'right';
}) => (
  <motion.article
    initial={{ x: direction === 'left' ? -700 : 700 }}
    animate={{ x: 0, transition: { type: 'just' } }}
    className="flex gap-28 px-5 my-20 max-md:flex-col"
  >
    {children}
  </motion.article>
);

export default SlideAnimationWrapper;
