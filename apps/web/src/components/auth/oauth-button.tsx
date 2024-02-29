"use client";

import Image from "next/image";

import { Button } from "@muse/ui";

export function OauthButton(): JSX.Element {
  return (
    <div className="flex gap-4">
      <Button
        variant="outline"
        className="w-full items-center gap-4 rounded-md text-sm"
      >
        <Image
          src="/github-icon.svg"
          alt="github-icon"
          width={20}
          height={20}
        />
        Sign up with GitHub
      </Button>
      <Button
        variant="outline"
        className="w-full items-center gap-4 rounded-md text-sm"
      >
        <Image
          src="/google-icon.svg"
          alt="google-icon"
          width={20}
          height={20}
        />
        Sign up with Google
      </Button>
    </div>
  );
}
