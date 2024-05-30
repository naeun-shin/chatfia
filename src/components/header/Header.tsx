import React from "react";
import Image from "next/image";
import Link from "next/link";
import LoginButton from "./LoginButton";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center gap-2 px-8 py-4 bg-zinc-800">
        <Link href="/">
          <div className="flex gap-2 cursor-pointer">
            <Image src="/imgs/logo.png" alt="logo" width={50} height={50} />
            <Image
              src="/imgs/chatfia.png"
              alt="chatfia"
              width={130}
              height={50}
            />
          </div>
        </Link>
        <div className="flex gap-20 text-xl">
          <Link href="/rule">게임설명</Link>
          <Link href="/lobby">게임로비</Link>
          <Link href="/donation">후원하기</Link>
        </div>
        <LoginButton />
      </div>
    </header>
  );
}
