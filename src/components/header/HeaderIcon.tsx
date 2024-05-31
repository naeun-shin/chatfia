import React from "react";
import Link from "next/link";
import { CircleUserRound } from "lucide-react";
import { DoorOpen } from "lucide-react";

export default function HeaderIcons() {
  return (
    <div>
      <Link href="/mypage">
        <CircleUserRound color="white" size={50} />;
      </Link>
      <Link href="/">
        <DoorOpen color="white" size={50} />;
      </Link>
    </div>
  );
}
