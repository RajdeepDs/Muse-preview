import { Button } from "@muse/ui";
import Image from "next/image";

export default function OpenSourceSection(): JSX.Element {
  return (
    <div className="container flex flex-col items-center space-y-10 py-14">
      <div className="flex flex-col space-y-5">
        <h1 className="bg-gradient-to-br from-white from-25% to-white/70 to-75% bg-clip-text text-center text-6xl font-bold leading-tight text-transparent">
          Proudly open-source
        </h1>
        <p className="text-grey/60 text-center text-xl font-light">
          Our source code is available on GitHub - feel free to read, review, or
          <br />
          contribute to it however you want!
        </p>
      </div>
      <Button className="w-fit gap-2" variant="secondary">
        <Image src="/github-mark.svg" width={24} height={24} alt="Github" />
        GitHub
      </Button>
    </div>
  );
}
