import React from "react";
import { ProgressBar } from "@/components/ui/progress";
import TopHoverCard from "./TopHoverCard";
import BottomHoverCard from "./BottomHoverCard";

const GameRules: React.FC = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 300);
    return () => clearTimeout(timer);
  }, []);

  const checkpoints = Array.from({ length: 11 }, (_, i) => i * 10); // 분기점 위치

  return (
    <div>
      <div className="mb-20 mt-20 flex items-end justify-center space-x-2">
        <p className="text-4xl font-bold">게임 룰</p>
        <p className="font-bold">Game rule</p>
      </div>
      <TopHoverCard />
      <div className="mx-auto w-4/5">
        <ProgressBar value={progress} checkpoints={checkpoints} />
      </div>
      <BottomHoverCard />
      <div className="mb-20 mt-60 flex-col">
        <div className="mb-8 flex items-end justify-center space-x-2">
          <p className="text-4xl font-bold">승리 조건</p>
          <p className="font-bold">Victory conditions</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 text-xl">
          <p className="animate-colorChangeRed">
            마피아팀 : 마피아의 수가 시민과 같거나 더 많으면 승리
          </p>
          <p className="animate-colorChangeGreen">
            시민팀 : 마피아를 모두 제거하면 승리
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameRules;
