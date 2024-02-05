import Link from 'next/link';
import Links from './links/Links';

type Props = {};

function Navbar({}: Props) {
  return (
    <header className="h-24 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        Logo
      </Link>
      <Links />
    </header>
  );
}

export default Navbar;
