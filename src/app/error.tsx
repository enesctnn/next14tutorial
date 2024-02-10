'use client';

import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Props = {
  error: Error;
};

function Error({ error }: Props) {
  const router = useRouter();
  return (
    <div className="mt-16 flex flex-col items-center  p-10 bg-red-400 rounded-sm gap-4 min-w-max relative max-w-min mx-auto outline-white outline outline-2">
      <section>
        <h1 className="text-5xl font-bold text-red-700 whitespace-nowrap mb-2">
          An Error Occured!
        </h1>
        <p className="text-xl font-medium leading-relaxed text-red-600 capitalize">
          {error.message || 'Something went wrong 🤷🏼'}
        </p>
      </section>

      <button
        onClick={() => router.back()}
        className="grayscale text-2xl select-none absolute bottom-3 left-5"
      >
        🔙
      </button>
      <Link
        href="/"
        className={buttonVariants({
          variant: 'link',
          className: 'text-white font-bold text-2xl',
        })}
      >
        HOME 🏠
      </Link>
    </div>
  );
}

export default Error;
