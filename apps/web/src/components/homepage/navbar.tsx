import { Button } from "@muse/ui";
import Image from "next/image";
import Link from "next/link";
import { NavTabs } from "./nav-tabs";

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
    <div className="container mx-auto flex items-center justify-between">
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
            <span className="">{item.name}</span>
          </Link>
        ))}
      </div>
      <div className="flex gap-2 text-base">
        <Button variant="ghost" size="sm">
          Log in
        </Button>
        <Button size="sm">Sign Up</Button>
      </div>
    </div>
  );
}
