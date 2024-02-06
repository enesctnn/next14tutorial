import ImagedArticle from '@/components/article/ImagedArticle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type Props = {};

function ContactPage({}: Props) {
  const className = 'border-none rounded-s bg-[#2d2b41] min-w-52';
  return (
    <ImagedArticle imagePath="/contact.png" imagePosition="left">
      <form action="" className="flex flex-col gap-4">
        <Input
          className={className}
          type="text"
          placeholder="Full Name"
          required
        />
        <Input
          className={className}
          type="email"
          placeholder="Email Adress"
          required
        />
        <Input
          className={className}
          type="text"
          placeholder="Phone Number (Optional)"
        />
        <Textarea
          name=""
          id=""
          cols={30}
          rows={8}
          placeholder="Message"
          className={className}
        ></Textarea>
        <Button>Send</Button>
      </form>
    </ImagedArticle>
  );
}

export default ContactPage;
