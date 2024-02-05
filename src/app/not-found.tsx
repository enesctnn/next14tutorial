import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

type Props = {};

function NotFound({}: Props) {
  return (
    <main>
      <h2>Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link
        href="/"
        className={buttonVariants({
          variant: 'link',
          size: 'sm',
          className: 'text-sm text-muted-foreground',
        })}
      >
        Return Home
      </Link>
    </main>
  );
}

export default NotFound;
