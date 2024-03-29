import ImagedArticle from '@/components/article/ImagedArticle';
import { buttonVariants } from '@/components/ui/button';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

export const metadata: Metadata = {
  title: 'Home',
  description: 'home page',
};

function Home({}: Props) {
  return (
    <ImagedArticle imagePath="/hero.png">
      <h1 className="text-8xl font-bold leading-snug max-md:text-6xl">
        Creative Thoughts Agency.
      </h1>
      <p className="text-xl max-md:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laborum
        animi iusto cupiditate vel expedita ut iste, aspernatur recusandae, ab
        suscipit iure libero. Labore obcaecati ipsam unde! Fuga, repudiandae
        ducimus.
      </p>
      <menu className="flex gap-6">
        <Link href="/about" className={buttonVariants()}>
          Learn More
        </Link>
        <Link
          href="/contact"
          className={buttonVariants({ variant: 'secondary' })}
        >
          Contact
        </Link>
      </menu>
      <div className="w-[500px] h-12 relative grayscale">
        <Image src="/brands.png" alt="brand logos" fill />
      </div>
    </ImagedArticle>
  );
}

export default Home;
