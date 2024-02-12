import { Button } from "@muse/ui";
import Image from "next/image";
import Link from "next/link";
import NavTabs from "./nav-tabs";

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
    <nav className="container flex items-center justify-between py-2 ">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="./Logo.svg" alt="Muse" width={25} height={25} />
          <h1 className="text-md font-medium">Muse</h1>
        </Link>
        <NavTabs />
        {navItems.map((item) => (
          <Link
            href={`/${item.slug}`}
            key={item.slug}
            className="flex space-x-3"
          >
            <span className="text-base font-light">{item.name}</span>
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
