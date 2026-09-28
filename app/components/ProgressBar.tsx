"use client";

interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

export default function ProgressBar({
  step,
  totalSteps,
}: ProgressBarProps) {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="mb-10">

      <div className="flex justify-between text-sm text-gray-300 mb-2">
        <span>
          Step {step} of {totalSteps}
        </span>

        <span>
          {Math.round(progress)}%
        </span>
      </div>

      <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">

        <div
          className="h-full bg-yellow-500 rounded-full transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}