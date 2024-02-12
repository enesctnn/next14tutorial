'use server';

import slugify from 'slugify';
import { connectToDb } from './connectToDb';
import { Post } from './models';
import { redirect } from 'next/navigation';

export const addPost = async (formData: FormData) => {
  const { title, desc, img, userId }: PostFormData = Object.fromEntries(
    formData
  ) as unknown as PostFormData;

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      img,
      userId,
      slug: slugify(title, { replacement: '_', lower: true, trim: true }),
    });
    await newPost.save();
  } catch (error) {
    return { error: 'Something went wrong !' };
  }
  redirect('/blog');
};

interface PostFormData {
  title: string;
  desc: string;
  img: string;
  userId: string;
  slug: string | null;
}
