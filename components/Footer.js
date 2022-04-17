import Link from "next/link";

const links = [
  {
    name: "Discord",
    href: "/discord",
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
      className="pb-6 mt-32 font-semibold text-center text-black uppercase font-inter"
    >
      <ul
        id="footernav"
        className="flex flex-col items-center justify-center mb-10 space-y-6 text-xl md:flex-row md:space-x-12 md:space-y-0 md:w-screen"
      >
        {links.map(({ name, href }) => (
          <li className="li-none" key={name}>
            <Link href={href ?? ``}>
              <a
                target="_blank"
                className="px-4 py-2 hover:bg-black hover:bg-opacity-5 rounded-xl"
              >
                {name ?? ``}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <h1 className="px-6 text-base opacity-60 md:px-4">
        copyright NeoHacks 2021 - {new Date().getFullYear()} all rights reserved
      </h1>
    </footer>
  );
}
