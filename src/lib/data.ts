import { POSTS } from '@/data/POSTS';
import { USERS } from '@/data/USERS';

export const getPosts = () => POSTS;

export const getPost = (slug: string) =>
  POSTS.find((post) => post.href === `/${slug}`);

export const getUser = (userId: string) =>
  USERS.find((user) => Number(user.id) === Number(userId));
