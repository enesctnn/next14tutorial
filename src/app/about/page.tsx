'use client';

import Counter from '@/components/ui/Counter';
import ImagedArticle from '@/components/article/ImagedArticle';

type Props = {};

function AboutPage({}: Props) {
  return (
    <ImagedArticle imagePath="/about.png">
      <h2 className="text-3xl text-blue-700 font-bold -mb-8">About Agency</h2>
      <h1 className="text-6xl font-bold leading-snug">
        We create digital ideas that are bigger, bolder, braver and better
      </h1>
      <p className="text-xl leading-relaxed">
        We create digital ideas that are bigger, bolder, braver and better. We
        believe in good ideas flexibility and precission we&apos;re world&apos;s
        Our Special Team best consulting & finance solution provide. Wide range
        of web and software development services.
      </p>
      <div className="flex gap-10 font-bold">
        <div className="flex flex-col gap-3 items-start">
          <h1 className="text-5xl text-blue-700 whitespace-nowrap">
            <Counter key="expreience" value={10} direction="up" />
            K+
          </h1>
          <p className="text-lg">Year of expreience</p>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <h1 className="text-5xl text-blue-700 whitespace-nowrap">
            <Counter key="people" value={234} direction="up" />
            K+
          </h1>
          <p className="text-lg">People reached</p>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <h1 className="text-5xl text-blue-700 whitespace-nowrap">
            <Counter key="services" value={5} direction="up" />
            K+
          </h1>
          <p className="text-lg">Services and plugins</p>
        </div>
      </div>
    </ImagedArticle>
  );
}

export default AboutPage;
