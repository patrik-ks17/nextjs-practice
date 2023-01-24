import Link from "next/link";
import React from "react";


function Header() {
  return (
    <header className="p-5 bg-blue-500">
      <p className="font-bold text-white">Header</p>
      <Link href="/" className="px-2 py-1 bg-white text-blue-500 rounded-lg mr-3">Home</Link>
      
      <Link href="/todos" className="px-2 py-1 bg-white text-blue-500 rounded-lg mr-3">Todos</Link>

      <Link href="/search" className="px-2 py-1 bg-white text-blue-500 rounded-lg">Search</Link>
    </header>
  );
}

export default Header;
