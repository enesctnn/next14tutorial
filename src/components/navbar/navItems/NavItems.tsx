import React from 'react';
import NavLink from '../navLink/NavLink';
import { LinksT } from '../links/Links';
import { Button } from '@/components/ui/button';

export type NavProps = {
  links: LinksT;
  session: boolean;
  isAdmin: boolean;
};

function NavItems({ links, isAdmin, session }: NavProps) {
  return (
    <div className="hidden md:flex gap-3 items-center">
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
          <Button variant="link">Logout</Button>
        </>
      )}
      {!session && (
        <NavLink href="/login" className="rounded-sm">
          Login
        </NavLink>
      )}
    </div>
  );
}

export default NavItems;
