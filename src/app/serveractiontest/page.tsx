import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { addPost } from '@/lib/actions';

type Props = {};

function ServerActionTestPage({}: Props) {
  return (
    <form action={addPost} className="flex flex-col w-2/4 mx-auto gap-4">
      <div className="flex flex-col gap-4">
        <label htmlFor="title" className="text-3xl">
          Blog Title
        </label>
        <Input name="title" required />
        <label htmlFor="userId" className="text-3xl">
          User Id
        </label>
        <Input name="userId" required />
        <label htmlFor="title" className="text-3xl">
          Image
        </label>
        <Input name="img" required />
        <label htmlFor="title" className="text-3xl">
          Description
        </label>
        <Input name="desc" required />
      </div>
      <menu>
        <Button>Submit</Button>
      </menu>
    </form>
  );
}

export default ServerActionTestPage;
