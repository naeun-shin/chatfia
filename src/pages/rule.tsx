import React from "react";
import Header from "@/components/header/Header";
import GameRules from "../components/rule/GameRules";
import RoleIntroduction from "@/components/rule/RoleIntroduction";

export default function Rule() {
  return (
    <div>
      <Header />
      <GameRules />
      <RoleIntroduction />
    </div>
  );
}
