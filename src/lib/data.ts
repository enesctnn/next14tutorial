import { connectToDb } from './connectToDb';
import { Post, User } from './models';

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return JSON.parse(JSON.stringify(posts));
  } catch (error) {
    throw new Error('Failed to fetch posts!');
  }
};

export const getPost = async (slug: string) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return JSON.parse(JSON.stringify(post));
  } catch (error) {
    throw new Error('Failed to fetch post!');
  }
};

export const getUser = async (id: string) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    throw new Error('Failed to fetch user!');
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return JSON.parse(JSON.stringify(users));
  } catch (error) {
    throw new Error('Failed to fetch users!');
  }
};
