"use client";

import BackButton from "@/components/back_button";
import { useRouter } from "next/navigation";

function Dashboard() {
  const router = useRouter();
  const randomNumber = Math.random();

  const handleClick = () => {
    randomNumber < 0.5
      ? router.push("/dashboard/settings")
      : router.push("/dashboard/analytics");
  };

  return (
    <div className="flex flex-col gap-3 py-3 px-5">
      <div>Dashboard Page</div>

      <div>
        <BackButton />
      </div>
      <div>
        <button
          className="bg-gray-100 border border-gray-300 hover:border-black hover:bg-gray-200 text-gray-800 hover:text-gray-600 px-4 py-2 rounded-md"
          onClick={handleClick}
        >
          Go to Settings or Analytics
        </button>
        <div className="text-red-500 py-3">
          (useRouter hook is used here for programmatic navigation. If the
          randomly generated number is less than 0.5, <br /> then this button
          will navigate to /dashboard/settings <br /> otherwise, it will
          navigate to /dashboard/analytics.)
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
