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
            className="flex items-center w-full p-2 text-base  transition duration-75 rounded-lg group  text-white hover:bg-purple-300"
          >
            {icons1}
            <span className="flex-1 ms-3 whitespace-nowrap capitalize">
              {teks}
            </span>
          </Link>
        </li>
      ) : (
        <Link
          href={link}
          className={`flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group  text-white hover:bg-purple-300 text-[.9rem]`}
        >
          {teks}
        </Link>
      )}
    </li>
  );
};

export default ListMenu;
