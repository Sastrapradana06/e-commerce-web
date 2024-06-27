import { IoIosCloseCircle } from "react-icons/io";
import { MdVerified } from "react-icons/md";

export default function Alert({
  status,
  type,
  message,
}: {
  status: boolean;
  type: string;
  message: string;
}) {
  if (!status) return null;

  return (
    <div className="w-full  h-max absolute left-0 bottom-[30px]">
      <div
        className={`flex w-max m-auto items-center gap-1 py-2 px-4 mb-4 text-sm rounded-lg bg-slate-100 text-black ring-1 ring-slate-600 shadow-xl`}
        role="alert"
      >
        {type === "success" ? (
          <MdVerified size={20} className="text-green-500" />
        ) : (
          <IoIosCloseCircle size={20} className="text-red-500" />
        )}
        <div className="flex justify-center items-center gap-2">
          <span className="text-black">{message}</span>
        </div>
      </div>
    </div>
  );
}
