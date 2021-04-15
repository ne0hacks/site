import Link from "next/link";

export default function Sponsor({ companyName, logo, website }) {
  return (
    <div>
      <Link href={website}>
        <a>
          <img
            src={logo}
            alt={companyName}
            className="w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          />
        </a>
      </Link>
    </div>
  );
}
