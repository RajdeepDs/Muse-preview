import { Button } from "@muse/ui";
import * as Icons from "@muse/ui/icons";
import InfoPill from "./info-pill";

export default function HeroSection(): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-y-5">
      <InfoPill />
      <h1 className="w-2/4 text-center text-5xl font-bold leading-tight">
        Effortless Full-Stack Development with Muse
      </h1>
      <div className="text-grey text-center text-xl font-light">
        <p>Effortless collaboration, seamless Vercel deployment.</p>
        <p>Everything you need to code faster and smarter.</p>
      </div>
      <Button className="mt-8 py-6 text-lg font-normal tracking-wide">
        Get Started
        <Icons.ChevronRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
}
