import mongoose from 'mongoose';

interface CONNECTION {
  isConnected: number;
}

const connection = {} as CONNECTION;

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log('Using existing connection');
      return;
    }
    const db = await mongoose.connect(process.env!.MONGO || '');
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw new Error('Something went wrong while connecting to db.');
  }
};
