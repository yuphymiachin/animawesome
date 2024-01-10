"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <>
      <Image
        onClick={() => router.push("/")}
        alt="Logo"
        className="hidden lg:block cursor-pointer"
        height="52"
        width="200"
        src="/images/logo-full.svg"
      />
      <Image
        onClick={() => router.push("/")}
        alt="Logo"
        className="hidden min-[450px]:block lg:hidden cursor-pointer"
        height="49"
        width="49"
        src="/images/logo.svg"
      />
    </>
  );
};

export default Logo;
