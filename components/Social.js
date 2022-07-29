import Link from "next/link";
import React from 'react'
import Icon from 'supercons'

export default function Social({ socialName, icon, site }) {
  return (
    <div>
      <Link href={site}>
        <a>
          <img
            src={icon}
            alt={socialName}
            className="w-9 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          />
        </a>
      </Link>
    </div>
  );
}
