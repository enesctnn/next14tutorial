import { getUser } from '@/lib/data';

type Props = {
  date: string;
  userId: string;
};
// async function fetchUser(userId: string | number) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//      ,{ cache: 'no-store' }
//   );
//   if (!res.ok) {
//     throw new Error('User fetching went wrong!');
//   }
//   return res.json();
// }

async function PostUser({ date, userId }: Props) {
  // const user = await fetchUser(userId);
  const user = getUser(userId);
  return (
    <table className="-mx-8 border-separate border-spacing-1 block">
      <thead>
        <tr className="font-bold text-gray-400 text-left">
          <th>Author</th>
          <th>Publish</th>
        </tr>
      </thead>
      <tbody>
        <tr className="font-medium text-gray-300">
          <td>{user!.name}</td>
          <td>{date}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default PostUser;
