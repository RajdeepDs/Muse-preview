import { OauthButton } from "@/components/auth/oauth-button";
import UserAuthForm from "@/components/auth/user-auth-form";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage(): JSX.Element {
  return (
    <div className="mx-auto flex h-screen w-full max-w-[450px] flex-col justify-center gap-y-4">
      <div className="flex flex-col gap-y-6 text-start">
        <Image src="./Logo.svg" width={30} height={30} alt="Muse" />
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold">Create a Muse account</h1>
          <p className="text-grey/70">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
      <UserAuthForm />
      <div className="my-4 flex w-full items-center">
        <div className="bg-grey/20 h-[1px] w-full" />
        <p className="text-grey/70 px-2 text-sm">OR</p>
        <div className="bg-grey/20 h-[1px] w-full" />
      </div>
      <div className="w-full">
        <OauthButton />
      </div>
      <p className="text-grey/70 text-center text-sm font-light">
        By signin up, you agree to our{" "}
        <Link
          href="/terms"
          className="hover:text-brand text-white hover:underline"
        >
          terms,
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="hover:text-brand text-white hover:underline"
        >
          privacy policy
        </Link>
        .
      </p>
    </div>
  );
}
