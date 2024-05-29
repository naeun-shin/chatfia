import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function LoginButton() {
  return (
    <Link href="/auth">
      <Button variant="bounce" className="gap-2">
        LOGIN
        <LogIn />
      </Button>
    </Link>
  );
}
