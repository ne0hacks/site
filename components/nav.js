import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "2021", href: "/2021" },
];

export default function Nav() {
  return (
    <nav className="sticky z-50 bg-navy bg-opacity-90">
      <ul className="flex flex-wrap justify-center p-5">
        {links.map(({ href, label }) => (
          <li className="self-center" key={`${href}${label}`}>
            <Link href={href} passHref>
              <a
                className={`font-inter text-white px-4 py-2 rounded-xl hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10`}
              >
                {label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
