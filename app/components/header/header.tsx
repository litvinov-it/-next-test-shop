import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between p-5 bg-gray-100">
      <div>LOGO</div>
      <Link href="/products" className="underline">
        Продукты
      </Link>
    </header>
  );
};

export default Header;
