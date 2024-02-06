import ImagedArticle from '@/components/article/ImagedArticle';
import { Button, buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

function Home({}: Props) {
  return (
    <ImagedArticle imagePath="/hero.png">
      <h1 className="text-8xl font-bold leading-snug">
        Creative Thoughts Agency.
      </h1>
      <p className="text-[20px]">
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
