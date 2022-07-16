import Link from "next/link";
import React from 'react'
import Icon from 'supercons'

export default function Social({ socialName, icon, site }) {
  return (
    <div>
      <Link href={site}>
        <a>
          <Icon 
            glyph={icon} 
            size={70}
            className="w-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          ></Icon>
        </a>
      </Link>
    </div>
  );
}
