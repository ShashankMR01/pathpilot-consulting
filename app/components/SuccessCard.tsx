"use client";

interface SuccessCardProps {
  onNewApplication: () => void;
}

export default function SuccessCard({
  onNewApplication,
}: SuccessCardProps) {
  return (
    <div className="text-center py-20">

      <div className="text-7xl mb-6">
        🎉
      </div>

      <h2 className="text-4xl font-bold text-yellow-400 mb-4">
        Thank You!
      </h2>

      <p className="text-xl text-gray-300 mb-10">
        Your consultation request has been submitted successfully.
        <br />
        Our team will contact you shortly.
      </p>

      <button
        onClick={onNewApplication}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl"
      >
        Submit Another Application
      </button>

    </div>
  );
}