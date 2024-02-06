'use client';

import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
  error: Error;
};

function Error({ error }: Props) {
  return (
    <div className="mt-16 flex flex-col items-center w-full p-10 bg-red-400 rounded-sm gap-4 min-w-max relative">
      <section>
        <h1 className="text-5xl font-bold text-red-700 whitespace-nowrap mb-2">
          An Error Occured!
        </h1>
        <p className="text-xl font-medium leading-relaxed text-red-600 capitalize">
          {error.message || 'Something went wrong 🤷🏼'}
        </p>
      </section>

      <span className="grayscale text-xl select-none absolute bottom-2 right-5">
        🔙
      </span>
      <Link
        href="/"
        className={buttonVariants({
          variant: 'link',
          className: 'text-white font-bold text-lg',
        })}
      >
        HOME 🏠
      </Link>
    </div>
  );
}

export default Error;
