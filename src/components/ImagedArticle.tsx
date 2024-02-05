import Image from 'next/image';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  imagePath: string;
  imagePosition?: 'right' | 'left';
};

function ImagedArticle({
  children,
  imagePath,
  imagePosition = 'right',
}: Props) {
  if (imagePosition === 'left') {
    return (
      <article className="flex gap-28 px-5 my-20">
        <div className="flex-1 relative min-w-40">
          <Image
            src={imagePath}
            alt="tree people puzzles a light bulb"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain object-center"
            priority
          />
        </div>
        <div className="flex-1 flex flex-col gap-12">{children}</div>
      </article>
    );
  } else if (imagePosition === 'right') {
    return (
      <article className="flex gap-28 px-5 my-20">
        <div className="flex-1 flex flex-col gap-12">{children}</div>
        <div className="flex-1 relative min-w-40">
          <Image
            src={imagePath}
            alt="tree people puzzles a light bulb"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain object-center"
            priority
          />
        </div>
      </article>
    );
  }
  return;
}

export default ImagedArticle;
