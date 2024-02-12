import { Schema, model, models } from 'mongoose';

export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  avatar: string;
  createdAt: Date;
}

export interface IPost {
  _id: string;
  title: string;
  desc: string;
  img: string;
  userId: string;
  slug: string;
  createdAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    avatar: {
      type: String,
      default: 'noavatar.png',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const postSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = models.User || model('User', userSchema);

export const Post = models.Post || model('Post', postSchema);
