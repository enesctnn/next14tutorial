import MobileNavItems from '../navItems/MobileNavItems';
import NavItems from '../navItems/NavItems';

export type LinksT = typeof links;

const links = [
  {
    title: 'Homepage',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];
type Props = {};

function Links({}: Props) {
  //MOCKS
  const session = true;
  const isAdmin = true;

  return (
    <>
      <NavItems links={links} isAdmin={isAdmin} session={session} />
      <MobileNavItems links={links} isAdmin={isAdmin} session={session} />
    </>
  );
}

export default Links;
