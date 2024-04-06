"use client";

import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={router.back}
      className="bg-gray-100 border border-gray-300 hover:border-black hover:bg-gray-200 text-gray-800 hover:text-gray-600 px-4 py-2 rounded-md transition duration-300 ease-in-out"
    >
      Go Back
    </button>
  );
}

export default BackButton;
