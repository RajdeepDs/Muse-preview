import Link from "next/link";
import Image from "next/image";
import NavTabs from "./nav-tabs";
import { Button } from "@muse/ui";

export const navItems = [
  {
    name: "Docs",
    slug: "docs",
  },
  {
    name: "Pricing",
    slug: "pricing",
  },
  {
    name: "Blog",
    slug: "blog",
  },
  {
    name: "Changelog",
    slug: "changelog",
  },
];

export default function NavBar(): JSX.Element {
  return (
    <nav className="flex py-2 items-center justify-between ">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="./Logo.svg" alt="Muse" width={25} height={25} />
          <h1 className="font-medium text-md">Muse</h1>
        </Link>
        <NavTabs />
        {navItems.map((item) => (
          <Link
            href={`/${item.slug}`}
            key={item.slug}
            className="flex space-x-3"
          >
            <span className="font-light text-base">{item.name}</span>
          </Link>
        ))}
      </div>
      <div className="flex gap-2">
        <Button variant="ghost">Log in</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  );
}
