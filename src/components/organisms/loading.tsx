import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-[1000] text-white">
      <div className="w-full h-[100vh] "></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-max flex justify-center items-center">
        <button
          type="button"
          className="bg-purple-700 flex items-center gap-2 p-3 rounded-lg"
          disabled
        >
          <FaSpinner className="animate-spin" />
          <span>Loading...</span>
        </button>
      </div>
    </div>
  );
}
