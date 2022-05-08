import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "2021", href: "/2021" },
];

export default function Nav() {
  return (
    <nav className="sticky z-50 bg-navy bg-opacity-90">
      <ul className="flex flex-wrap items-start p-8 mt-6 sm:justify-between sm:items-center sm:mt-0">
        <li></li>
        <ul className={`mx-auto sm:mx-0 flex flex-row space-x-5`}>
          {links.map(({ href, label }) => (
            <li className="self-center" key={`${href}${label}`}>
              <Link href={href} passHref>
                <a
                  className={`font-inter text-white px-4 py-2 rounded hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10`}
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
