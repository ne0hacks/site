import Link from "next/link";

const links = [
  {
    name: "Schedule",
    href: "https://docs.google.com/document/d/e/2PACX-1vR1O8A_iXcK8fQU053jixHVZf3XPC5LoXaFOXXhl0nKRwfIkjURlW8JVwO9LYaFdXqhbDJEbcEglFoZ/pub",
  },
  { name: "Sponsor Deck", href: "/NeoHacksProspectus.pdf" },
  {
    name: "Donate",
    href: "https://bank.hackclub.com/donations/start/neohacks",
  },
  { name: "Contact", href: "mailto:info@neohacks.org" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="mt-32 text-black font-inter font-semibold uppercase text-center pb-6"
    >
      <ul
        id="footernav"
        className="mb-10 flex flex-col md:flex-row space-y-6 md:space-x-12 md:space-y-0 md:w-screen text-xl justify-center items-center"
      >
        {links.map(({ name, href }) => (
          <li className="li-none" key={name}>
            <Link href={href ?? ``}>
              <a
                target="_blank"
                className="hover:bg-black hover:bg-opacity-5 px-4 py-2 rounded-xl"
              >
                {name ?? ``}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <h1 className="opacity-60 px-6 md:px-4 text-base">
        copyright neohacks {new Date().getFullYear()} all rights reserved
      </h1>
    </footer>
  );
}
