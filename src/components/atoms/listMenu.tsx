import Link from "next/link";

interface ButtonProps {
  teks: string;
  link: string;
  icons1?: React.ReactNode;
}

const ListMenu: React.FC<ButtonProps> = ({ link, teks, icons1 }) => {
  return (
    <li>
      {icons1 ? (
        <li>
          <Link
            href={link}
            className="flex items-center w-full p-2 text-base  transition duration-75 rounded-lg group   hover:bg-purple-200 "
          >
            {icons1}
            <span className="flex-1 ms-3 whitespace-nowrap capitalize text-white lg:text-gray-700">
              {teks}
            </span>
          </Link>
        </li>
      ) : (
        <Link
          href={link}
          className={`flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group   hover:text-purple-300 lg:hover:text-purple-600 text-[.9rem]`}
        >
          {teks}
        </Link>
      )}
    </li>
  );
};

export default ListMenu;
