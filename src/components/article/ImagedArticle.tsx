'use client';

import Image from 'next/image';
import { ReactNode } from 'react';
import SlideAnimationWrapper from '../SlideAnimationWrapper';

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
      <SlideAnimationWrapper direction={imagePosition}>
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
      </SlideAnimationWrapper>
    );
  } else if (imagePosition === 'right') {
    return (
      <SlideAnimationWrapper direction={imagePosition}>
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
      </SlideAnimationWrapper>
    );
  }
  return;
}

export default ImagedArticle;
