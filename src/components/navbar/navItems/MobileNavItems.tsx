import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NavProps } from './NavItems';
import { Menu } from 'lucide-react';
import NavLink from '../navLink/NavLink';
import { Button } from '@/components/ui/button';

function MobileNavItems({ isAdmin, links, session }: NavProps) {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu size={31} />
        </SheetTrigger>

        <SheetContent className="flex flex-col items-stretch gap-6 py-20 w-72 max-sm:max-w-52">
          <SheetHeader>
            <SheetTitle className="text-2xl">Menu</SheetTitle>
          </SheetHeader>
          {links.map((link) => (
            <NavLink key={link.title} href={link.path} className="rounded-3xl">
              {link.title}
            </NavLink>
          ))}
          {session && isAdmin && (
            <>
              <NavLink href="/admin" className="rounded-3xl">
                Admin
              </NavLink>
              <Button variant="link" className="text-white w-max mx-auto">
                Logout
              </Button>
            </>
          )}
          {!session && <NavLink href="/login">Login</NavLink>}
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavItems;
