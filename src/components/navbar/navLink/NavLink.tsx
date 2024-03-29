'use client';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  href: string;
  className?: string;
};

const NavLink = ({ children, href, className }: Props) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({
          variant: path === href ? 'secondary' : 'ghost',
          className,
        })
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
