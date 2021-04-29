import { useEffect } from "react";

export default function Card({
  type,
  icon,
  color,
  heading,
  children,
  extraclasses,
}) {
  const description = children;
  const idval =
    heading?.replace(/\s/g, "")?.replace(/'/g, "")?.toLowerCase() + icon ?? ``;
  useEffect(() => {
    const colors = {
      red: "#E94957",
      orange: "#FF7E47",
      yellow: "#FFFD85",
      green: "#10B981",
      blue: "#69709F",
      turquoise: "#2CDAC5",
    };
    const heading = document.querySelector(`#cardfour${idval ?? ``}`);
    if (heading != null) heading.style.color = colors[color];
    document
      .querySelectorAll(`.cardfour`)
      .forEach((card) => (card.style.paddingBottom = "0.5rem"));
  });
  switch (type) {
    case 2:
      return (
        <div className="font-inter bg-black bg-opacity-5 p-8 rounded-xl">
          {renderIcon(icon, color, 4)}
          <h3 className="mt-2 font-bold text-2xl">{heading}</h3>
          <div className={`text-lg w-11/12 ${extraclasses ?? ``}`}>
            {description}
          </div>
        </div>
      );
      break;
    case 3:
      return (
        <div className="mb-28 font-inter">
          {renderIcon(icon, color, 6)}
          <h3 className="mt-2 mb-4 font-bold text-5xl">{heading}</h3>
          <div className={`text-2xl w-11/12 ${extraclasses ?? ``}`}>
            {description}
          </div>
        </div>
      );
      break;
    case 4:
      return (
        <div className="font-inter bg-black bg-opacity-5 p-8 rounded-xl">
          {renderIcon(icon, color, 4)}
          <h3
            id={`cardfour${idval ?? ``}`}
            className={`cardfour m${
              icon ? `y` : `b`
            }-2 font-black text-3xl lg:text-5xl text-${color ?? "black"}`}
          >
            {heading}
          </h3>
          <div className={`text-xl w-11/12 ${extraclasses ?? ``}`}>
            {description}
          </div>
        </div>
      );
      break;
    case 5:
      return (
        <div className="font-inter bg-black bg-opacity-5 rounded-xl">
          {children}
        </div>
      );
      break;
    default:
      return (
        <div className="font-inter">
          {renderIcon(icon, color)}
          <h3 className="mt-2 font-bold text-2xl">{heading}</h3>
          <div className={`text-lg w-11/12 opacity-70 ${extraclasses ?? ``}`}>
            {description}
          </div>
        </div>
      );
      break;
  }
}

const colors = {
  red: "E94957",
  orange: "FF7E47",
  yellow: "FFFD85",
  green: "10B981",
  blue: "69709F",
  turquoise: "2CDAC5",
  purple: "F1BEFE",
};

function renderIcon(icon, color, size) {
  color = `#${colors[color] ?? "000000"}`;
  switch (icon) {
    case "lightbulb":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      );
      break;
    case "sparkles":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      );
      break;
    case "globe":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      );
      break;
    case "phone":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      );
      break;
    case "map":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      );
      break;
    case "puzzle":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      );
      break;
    case "flag":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
          />
        </svg>
      );
      break;
    case "pencil":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      );
      break;
    case "calendar":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      );
      break;
    case "pin":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );
      break;
    case "star":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      );
      break;
    case "cash":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      );
      break;
    case "moon":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      );
      break;
    default:
      break;
  }
}
