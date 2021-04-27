import Link from "next/link";

const links = [
  { label: "Page 1", href: "/" },
  { label: "Page 2", href: "/" },
  { label: "Page 3", href: "/" },
];

export default function Nav() {
  return (
    <nav>
      <ul className="flex flex-wrap sm:justify-between items-start sm:items-center p-8 mt-6 sm:mt-0">
        <li></li>
        <ul className={`mx-auto sm:mx-0 flex flex-row space-x-5`}>
          {links.map(({ href, label }) => (
            <li className="self-center" key={`${href}${label}`}>
              <Link href={href}>
                <a
                  className={`font-inter px-4 py-2 rounded hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10`}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
